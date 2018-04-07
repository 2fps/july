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

exports.trim = trim;
exports.ltrim = ltrim;
exports.rtrim = rtrim;