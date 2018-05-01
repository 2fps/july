/**
 * 函数去抖动
 * @Author   zyt
 * @DateTime 2018-04-15T22:38:24+0800
 * @param    {Function}               fn      处理函数
 * @param    {Object}                 context 出发环境的上下文
 * @param    {Number}                 delay   延迟时间，单位毫秒
 */
function debounce (fn, context, delay){
    clearTimeout(fn.timer);
    fn.timer = setTimeout(function(){
        fn.apply(context);
    }, delay || 500);
}

/**
 * 节流函数
 * @Author   zyt
 * @DateTime 2018-05-01T00:04:26+0800
 * @param    {Function}               fn    回调函数
 * @param    {Number}                 delay [description]
 * @param    {Number}                 time  [description]
 */
function throttle (fn, delay, time) {
    var timeout,
        startTime = +new Date();

    return function () {
        var context = this,
            args = arguments,
            curTime = +new Date();

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= time) {
            fn.apply(context, args);
            startTime = curTime;
        } else {
            // 没达到触发间隔，重新设定定时器
            timeout = setTimeout(fn, delay);
        }
    };
}

exports.debounce = debounce;
exports.throttle = throttle;