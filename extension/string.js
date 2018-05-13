/**
 * 清除字符串的左右空格
 * @Author   zyt
 * @DateTime 2018-04-06T21:51:59+0800
 * @param    {String}                 str 要清除的字符串
 * @return   {String}                     清除后的字符串
 */
function trim (str) {
    var reExtraSpace = /^\s*(.*?)\s+$/;

    return str.replace(reExtraSpace, "$1");
}

/**
 * 清除字符串的左侧空格
 * @Author   zyt
 * @DateTime 2018-04-06T21:53:17+0800
 * @param    {String}                 str 要清除的字符串
 * @return   {String}                     清除后的字符串
 */
function ltrim (str) {
    return str.replace( /^(\s*|　*)/, "");
}

/**
 * 清除字符串的右侧空格
 * @Author   zyt
 * @DateTime 2018-04-06T21:54:28+0800
 * @param    {String}                 str 要清除的字符串
 * @return   {String}                     清除后的字符串
 */
function rtrim (str) {
    return str.replace( /(\s*|　*)$/, "");
}

/**
 * 给数字加千分符
 * @Author   zyt
 * @DateTime 2018-04-11T22:07:16+0800
 * @param    {String}                 str 数字型字符串
 */
function addComma (str) {
    str = str.split('').reverse().join('');

    return str.match(/\d{1,3}/g).join(',').split('').reverse().join('');
    // 或者这么实现
    // var reg = /(\d{1,3})(?=(\d{3})+($|\.))/g;
    // return str.replace(reg,"$1,");
}

/**
 * 对字符串进行html编码，转义类似标签这种html
 * @Author   zyt
 * @DateTime 2018-04-11T22:13:58+0800
 * @param    {String}                 str 待转的字符串
 * @return   {String}                     转换完成的字符串
 */
function safeString(string) {
    if (!string) {
        return "";
    }
    var escape = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
        badChars = /[&<>"'`]/g;

    return string.replace(badChars, function(chr) {
        return escape[chr];
    });
}
/**
 * 驼峰命名转下划线
 * @Author   zyt
 * @DateTime 2018-04-27T23:56:18+0800
 * @param    {String}                 str 要转的字符串
 * @return   {String}                     转换成的字符串
 */
function toUnderLine (str) {
    return str.match(/^[a-z][a-z0-9]+|[A-Z][a-z0-9]*/g).join('_').toLowerCase();
}

/**
 * 获取字符串按字节的长度，主要是用来算中文的
 * @Author   zyt
 * @DateTime 2018-04-30T15:49:09+0800
 * @param    {String}                 val   要检测的字符串
 * @param    {Number}                 chLen 一个中文的位数，默认是2
 * @return   {Number}                       字符串的长度的长度
 */
function getByteLength (val, chLen) {
    var byteValLen = 0,
        len = val.length;

    chLen = chLen || 2;

    for (var i = 0; i < len; ++i) {
        if (null !== val[i].match(/[^\x00-\xff]/ig)) {
            byteValLen += chLen;
        }  else {
            byteValLen += 1;
        }
    }
    return byteValLen;
}

/**
 * 首字母大写
 * @Author   zyt
 * @DateTime 2018-05-02T23:13:57+0800
 * @param    {String}                 str [description]
 * @return   {String}                     转化后的字符串
 */
function capitalize (str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * 把url参数解析成一个对象
 * @Author   zyt
 * @DateTime 2018-05-13T22:00:17+0800
 * @param    {String}                 url url字符串
 * @return   {Object}                     解析后的对象
 */
function parseQuryString (url) {
    var obj = {},
        str = '',
        arr = [],
        item = '';

    if (~url.indexOf('?')) {
        str = url.split('?')[1];
        arr = str.split('&');

        for (var i = 0, len = arr.length; i < len; ++i) {
            item = arr[i];
            item = item.split('=');
            obj[item[0]] = item[1];
        }
    }

    return obj;
}



exports.trim = trim;
exports.ltrim = ltrim;
exports.rtrim = rtrim;
exports.addComma = addComma;
exports.safeString = safeString;
exports.toUnderLine = toUnderLine;
exports.getByteLength = getByteLength;
exports.capitalize = capitalize;
exports.parseQuryString = parseQuryString;