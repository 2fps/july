/**
 * 判断是否是数组
 * @Author   zyt
 * @DateTime 2018-04-06T22:09:33+0800
 * @param    {[type]}                 value 判断的变量
 * @return   {Boolean}                      是否是数组类型
 */
function isArray (value) {
    if (Array.isArray) {
        return Array.isArray(value); //IE9+
    } else {
        return Object.prototype.toString.call(vlaue) === "[object Array]";
    }
}

exports.isArray = isArray;