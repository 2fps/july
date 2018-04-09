/**
 *  获取元素的指定样式，（获取的是计算后，只读属性）
 * @Author   zyt
 * @DateTime 2018-04-09T22:00:14+0800
 * @param    {Node}                   obj       元素节点
 * @param    {String}                 style     要获取的样式
 * @return   {String}                           对应的样式
 */
function getStyle (obj, style) {
    if (obj.currentStyle) {
        return obj.currentStyle[style];
    } else {
        return getComputedStyle(obj, false)[style];
    }
}

exports.getStyle = getStyle;