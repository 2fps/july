/**
 * 判断是否是数组
 * @Author   zyt
 * @DateTime 2018-04-06T22:09:33+0800
 * @param    {[type]}                 value 判断的变量
 * @return   {Boolean}                      是否是数组类型
 */
function isArray (value) {
    if (Array.isArray) {
        return Array.isArray(value); // IE9+
    } else {
        return Object.prototype.toString.call(vlaue) === "[object Array]";
    }
}

/**
 * 数组内容匹配
 * @Author   zyt
 * @DateTime 2018-04-10T22:28:11+0800
 * @param    {Array}                 arr  要遍历的数组
 * @param    {[type]}                 val 要匹配的值
 * @return   {Number}                     匹配到数组中的位置，-1表示没有匹配上
 */
function indexOf (arr, val) {
    if (Array.indexOf) { // IE9+
        return arr.indexOf(val);
    } else {
        for (var i = 0, len = arr.length; i < len; ++i) {
            if (arr[i] === val) {
                return i;
            }
        }
        return -1;
    }
}

/**
 * 用于判断两个数组是否相等
 * @Author   zyt
 * @DateTime 2018-05-06T21:51:39+0800
 * @param    {Array}                 arr1   数组1
 * @param    {Array}                 arr2   数组2
 * @return   {Boolean}                      是否相等
 */
function arrayEqual (arr1, arr2) {
    if (arr1 === arr2) {
        return true;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0, len = arr1.length; i < len; ++i) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

exports.isArray = isArray;
exports.indexOf = indexOf;
exports.arrayEqual = arrayEqual;