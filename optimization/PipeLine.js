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


PipeLine.prototype.clearQueue = function() {
    _nowFn._cancel = true;
    executant.resumeValue();

};

PipeLine.prototype.getProcess = function() {
    return {
        success: _success,
        fail: _fail,
        all: _all,
        inProcess: !_isFree,
        paused: _pause
    }
};

PipeLine.prototype.pause = function() {
    if (!_pause) {
        _pause = true;
    }

    return this;
};

PipeLine.prototype.resume = function() {
    if (_pause) {
        _pause = false;

        executant.attempt();
    }

    return this;
};

PipeLine.prototype.on = function(eventName, fn) {
    // 检测是否存在存储的变量
    if (!event.list[eventName]) {
        event.list[eventName] = [];
    }
    event.list[eventName].push(fn);

    return this;
};

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
    next: function() {
        return _fns.shift();
    },
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
         * 1, 表示成功，
         * 0，表示失败
         * -1，表示被取消
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
            executant[msg]();
            event.onprogress();
        });
    },
    resumeValue: function() {
        _isFree = true;
        _fns.length = 0;
        _ctx.length = 0;
        _args.length = 0;
        _all = 0;
        _success = 0;
        _fail = 0;
        _pause = false;
    },
    succeed: function() {
        _success++;
        event.onsuccess();
        executant.perform(executant.next());
    },
    failed: function() {
        _fail++;
        event.onfail();
        executant.perform(executant.next());
    },
    canceled: function() {
        event.oncancel();
        delete _nowFn._cancel;
        _nowFn = null;
    },
    paused: function() {
        event.onpause();
        _isFree = true;
    }
};

var event = {
    list: {}
};

// 目前仅支持4中事件监听
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