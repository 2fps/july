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
 * 每三位加逗号间隔
 * @Author   zyt
 * @DateTime 2018-04-11T22:07:16+0800
 * @param    {String}                 str 数字型字符串
 */
function addComma (str) {
    str = str.split('').reverse().join('');

    return num.match(/\d{1,3}/g).join(',').split('').reverse().join('');
}

/**
 * 对字符串进行html编码，转义类似标签这种html
 * @Author   zyt
 * @DateTime 2018-04-11T22:13:58+0800
 * @param    {String}                 str 待转的字符串
 * @return   {String}                     转换完成的字符串
 */
function toHtmlEncode (str) {
    str = str.replace(/&/g,"&amp;");
    str = str.replace(/</g,"&lt;");
    str = str.replace(/>/g,"&gt;");
    str = str.replace(/\'/g,"&apos;");
    str = str.replace(/\"/g,"&quot;");
    str = str.replace(/\n/g,"<br>");
    str = str.replace(/\ /g,"&nbsp;");
    str = str.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");

    return str;
}

exports.trim = trim;
exports.ltrim = ltrim;
exports.rtrim = rtrim;