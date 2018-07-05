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
        attempt();
    }

    return this;
};


PipeLine.prototype.clearQueue = function() {
    _nowFn._cancel = true;
    resumeValue();

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

        attempt();
    }

    return this;
};

function attempt() {
    if (_isFree) {
        _isFree = false;
        perform(next());
    }
}

function perform(pro) {
    if (!pro) {
        _isFree = true;
        return this;
    }

    var arg = _args.shift(),
        ctx = _ctx.shift(),
        me = this;

    // 记录变量，供取消使用
    _nowFn = pro;

    pro.apply(ctx, arg).then(function() {
        if (!_nowFn._cancel) {
            _success++;
        }
    }, function() {
        if (!_nowFn._cancel) {
            _fail++;
        }
    })['always'](function() {
        if (_nowFn._cancel) {
            delete _nowFn._cancel;
            _nowFn = null;

            return;
        }
        if (!_pause) {
            me.perform(me.next());
        } else {
            _isFree = true;
        }
    });
}

// 获取下一个执行方法
function next() {
    return _fns.shift();
}

function resumeValue() {
    _isFree = true;
    _fns.length = 0;
    _ctx.length = 0;
    _args.length = 0;
    _all = 0;
    _success = 0;
    _fail = 0;
    _pause = false;
}