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

/**
 * 判断P点（x,y）在向量A(x1, y1)，B(x2, y2)的位置
 * @Author   zyt
 * @DateTime 2018-04-08T22:58:03+0800
 * @param    {Number}                 px P点横坐标
 * @param    {Number}                 py P点纵坐标
 * @param    {Number}                 x1 x点横坐标
 * @param    {Number}                 y1 x点纵坐标
 * @param    {Number}                 x2 y点横坐标
 * @param    {Number}                 y2 y点纵坐标
 * @return   {Number}                 >0 表示P点在向量AB的左侧，
 *                                    <0 表示P点在向量AB的右侧，
 *                                    0  表示P点在向量AB上。
 */
function pointLocationLine (px, py, x1, y1, x2, y2) {
    return (x2 - x1) * (py - y1) - (y2 - y1) * (px - x1);
}

exports.max = max;
exports.min = min;
exports.pointLocationLine = pointLocationLine;