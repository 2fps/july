/**
 * 函数去抖动
 * @Author   zyt
 * @DateTime 2018-04-15T22:38:24+0800
 * @param    {Function}               fn      处理函数
 * @param    {Object}                 context 出发环境的上下文
 * @param    {Number}                 delay   延迟时间，单位毫秒
 */
function debounce(fn, context, delay){
    clearTimeout(fn.timer);
    fn.timer = setTimeout(function(){
        fn.apply(context);
    }, delay || 500);
}