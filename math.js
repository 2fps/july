/**
 * 求数组中的最大值
 * @Author   zyt
 * @DateTime 2018-04-06T16:13:32+0800
 * @return   {Array}                 一系列数字组合
 */
function max () {
    return Math.max.apply(null, arguments);
}

/**
 * 求数组中的最小值
 * @Author   zyt
 * @DateTime 2018-04-06T21:43:08+0800
 * @return   {Aray}                 一系列数字组合
 */
function min () {
    return Math.min.apply(null, arguments);
}

exports.max = max;
exports.min = min;