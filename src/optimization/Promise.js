var Promise = function (fn) {
    var me = this;

    me.status = 'pending';
    me.reQueue = [];
    me.rjQueue = [];

    function resolve () {
        me.resolve();
    }

    function reject () {
        me.reject();
    }

    fn(resolve, reject);

};

Promise.prototype.resolve = function () {
    var me = this;
    // 修改当前的状态
    me.status = 'resolved';
    setTimeout(function () {
        me.performQueue();
    });
};

Promise.prototype.reject = function () {
    var me = this;
    // 修改当前的状态
    me.status = 'rejected';
    setTimeout(function () {
        me.performQueue();
    });
};

Promise.prototype.done = function (fn) {
    this.reQueue.push(fn);

    return this;
};

Promise.prototype.fail = function (fn) {
    this.rjQueue.push(fn);

    return this;
};

Promise.prototype.then = function (reFn, rjFn) {
    this.reQueue.push(reFn);
    this.rjQueue.push(rjFn);

    return this;
};

Promise.prototype.performQueue = function () {
    var fn = null,
        me = this;

    if ('rejected' === me.status) {
        // th
        fn = me.rjQueue[0];
        me.status = 'resolved';
    } else {
        fn = me.reQueue[0];
        me.reQueue.splice(0, 1);
    }
    if (fn) {
        //setTimeout(function () {
            fn();
            me.resolve();
        //});
    }
};

module.exports = Promise;