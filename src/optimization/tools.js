/**
 * 浅拷贝
 * @Author   zyt
 * @DateTime 2018-05-17T21:28:49+0800
 * @param    {Object|Array}                 obj 拷贝类型
 * @return   {Objct|Array}                      浅拷贝结果
 */
function shallowCopy(obj) {
    var result = '[object Object]' === Object.prototype.toString.call(obj) ? [] : {};

    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result[i] = obj[i]
        }
    }

    return result
}

/**
 * 深拷贝
 * @Author   zyt
 * @DateTime 2018-05-17T22:01:28+0800
 * @param    {Object|Array}                 obj 拷贝类型
 * @return   {Objct|Array}                      深拷贝结果
 */
function deepCopy(obj) {
    var str,
        result = '[object Object]' === Object.prototype.toString.call(obj) ? [] : {};

    if (window.JSON) {
        str = JSON.stringify(obj);
        result = JSON.parse(str);
    } else {
        for (var i in obj) {
            result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
        }
    }

    return result;
}

exports.shallowCopy = shallowCopy;
exports.deepCopy = deepCopy;