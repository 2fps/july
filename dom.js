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

/**
 * getElementsByClassName在IE9以下版本的实现方式
 * @Author   zyt
 * @DateTime 2018-04-11T23:01:20+0800
 * @param    {String}                 name 要匹配的字符串
 * @return   {Object}                      匹配上className的DOM节点
 */
function getElesByClassName(name) {
    var tags = document.getElementsByTagName('*') || document.all,
        eles = [];           // 存放选中的元素

    for (var i = 0, len = tags.length; i < len; ++i) {
        if (tags[i].className) {
            var cs = tags[i].className.split(' ');
            for (var j = 0; j < cs.length; ++j) {
                if (name === cs[j]) {
                    eles.push(tags[i]);
                    break;
                }
            }
        }
    }
    return eles;
}

exports.getStyle = getStyle;
exports.getElesByClassName = getElesByClassName;