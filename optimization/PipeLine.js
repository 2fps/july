var PipeLine = function() {},
    _isFree = true,     // 是否空闲
    _fns = [],          // 执行函数，目前必须是延迟对象
    _ctx = [],          // 上下文
    _args = [],         // 参数
    _all = 0,           // 所有的总长度
    _success = 0,       // 成功的个数
    _fail = 0,          // 失败的个数   这三个配置需要clear时才会恢复
    _pause = false,     // 是否已经手动暂停
    _nowFn = null;      // 当前执行的方法

/**
 * 增加事件
 * @Author   zyt
 * @DateTime 2018-07-07T22:44:45+0800
 * @param    {Function}               fn  执行函数（目前必须是promise对象）
 * @param    {Object}                 ctx 执行上下文
 * @param    {Array}                  arg 执行函数的参数
 */
PipeLine.prototype.add = function(fn, ctx, arg) {
    _fns.push(fn);
    _ctx.push(ctx || window);
    _args.push(arg || []);
    _all++;

    if (!_pause) {
        executant.attempt();
    }

    return this;
};

/**
 * 清空所有数据，恢复配置和数据
 * @Author   zyt
 * @DateTime 2018-07-07T23:08:42+0800
 */
PipeLine.prototype.clearQueue = function() {
    _nowFn._cancel = true;
    executant.resumeValue();

    return this;
};

/**
 * 获取当前的状态和进度
 * @Author   zyt
 * @DateTime 2018-07-07T23:11:48+0800
 * @return   {Object}                 包含的一些状态
 */
PipeLine.prototype.getProcess = function() {
    return {
        success: _success,
        fail: _fail,
        all: _all,
        inProcess: !_isFree,
        paused: _pause
    }
};

/**
 * 暂停当前的执行队列，但是已请求的无法停掉（有点没啥用）
 * @Author   zyt
 * @DateTime 2018-07-07T23:12:24+0800
 */
PipeLine.prototype.pause = function() {
    if (!_pause) {
        _pause = true;
    }

    return this;
};

/**
 * 恢复pause，继续执行队列中的方法
 * @Author   zyt
 * @DateTime 2018-07-07T23:13:08+0800
 */
PipeLine.prototype.resume = function() {
    if (_pause) {
        _pause = false;

        executant.attempt();
    }

    return this;
};

/**
 * 增加事件监听，目前支持的事件有：
 *     'open', 'progress', 'fail', 'success', 'pause', 'cancel', 'end'
 * @Author   zyt
 * @DateTime 2018-07-07T23:15:01+0800
 * @param    {String}                 eventName 事件名称
 * @param    {Function}               fn        对应要绑定的事件
 */
PipeLine.prototype.on = function(eventName, fn) {
    // 检测是否存在存储的变量
    if (!event.list[eventName]) {
        event.list[eventName] = [];
    }
    event.list[eventName].push(fn);

    return this;
};

/**
 * 解除on绑定的事件
 * @Author   zyt
 * @DateTime 2018-07-07T23:15:59+0800
 * @param    {String}                 eventName 事件名称
 * @param    {Function}               fn        对应要解除的事件，不填，则解除所有
 */
PipeLine.prototype.off = function(eventName, fn) {
    var eventList = event.list[eventName],
        index = -1;

    if (!eventList) {
        return this;
    }

    while (~(index = eventList.indexOf(fn))) {
        eventList.splice(index, 1);
    }

    if (undefined === fn) {
        eventList.length = 0;
    }

    return this;
};

// 与执行相关的操作
var executant = {
    // 尝试去执行
    attempt: function() {
        if (_isFree) {
            _isFree = false;

            if (0 === _success && 0 === _fail) {
                // 没有成功，没有失败，刚开始
                event.onopen();
            }

            executant.perform(executant.next());
        }
    },
    // 队列中下一个事件
    next: function() {
        return _fns.shift();
    },
    // 执行该事件
    perform: function(pro) {
        if (!pro) {
            _isFree = true;
            event.onend();

            return this;
        }

        var arg = _args.shift(),
            ctx = _ctx.shift(),
            me = this;

        // 记录变量，供取消使用
        _nowFn = pro;

        /**
         * succeed, 表示成功，
         * failed，表示失败
         * canceled，表示被取消
         * paused，表示被暂停
         */
        pro.apply(ctx, arg).then(function() {
            return 'succeed';
        }, function() {
            return 'failed';
        }).then(function(msg) {
            if (_nowFn._cancel) {
                // 用户异常取消，返回-1
                return 'canceled';
            } else if (_pause) {
                // 暂停的情况
                return 'paused'
            } else {
                // 其他情况下依旧使用先前的值传递
                return msg;
            }
        }).then(function(msg) {
            // 执行对应的事件
            executant[msg]();
            // 执行进度函数
            event.onprogress();
        });
    },
    // 恢复配置和变量
    resumeValue: function() {
        _isFree = true;
        _fns.length = 0;
        _ctx.length = 0;
        _args.length = 0;
        _all = 0;
        _success = 0;
        _fail = 0;
        _pause = false;
        _nowFn = null;
    },
    // 成功处理函数
    succeed: function() {
        _success++;
        event.onsuccess();
        executant.perform(executant.next());
    },
    // 失败处理函数
    failed: function() {
        _fail++;
        event.onfail();
        executant.perform(executant.next());
    },
    // 取消处理函数
    canceled: function() {
        event.oncancel();
        delete _nowFn._cancel;
        _nowFn = null;
    },
    // 暂停处理函数
    paused: function() {
        event.onpause();
        _isFree = true;
    }
};

// 事件有关内容的存储
var event = {
    list: {}
};

// 增加事件的监听
['open', 'progress', 'fail', 'success', 'pause', 'cancel', 'end'].forEach(function(value, index) {
    event['on' + value] = function() {
        if (!event.list[value]) {
            return;
        }
        event.list[value].forEach(function(val, ind) {
            // 遍历执行每个事件
            val();
        });
    };
});
