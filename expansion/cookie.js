/**
 * 设置cookie
 * @Author   zyt
 * @DateTime 2018-01-24T22:00:56+0800
 * @param    {String}                 name  cookie的name
 * @param    {String}                 value cookie的value
 * @param    {Number}                 days  cookie保存的时间
 */
function setCookie (name, value, days) {
    var setDay = new Date();

    // 设置超期时间
    setDay.setDate(setDay.getDate() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + escape(value) + ((days === undefined) ? "" : ";expires=" + setDay.toGMTString());
}
/**
 * 按name获取cookie
 * @Author   zyt
 * @DateTime 2018-01-24T22:01:17+0800
 * @param    {String}                 name  cookie的name
 * @return   {[type]}                      [description]
 */
function readCookie (name) {
    var start = 0,      // cookie匹配的开始位置
        end = 0;        // cookie撇配的结束位置

    // 查找一开始的位置
    start = document.cookie.indexOf(name + '=');

    // 计算结束位置
    if (-1 != start) {
        start += name.length + 1;
        end = document.cookie.indexOf(';', start);

        if (-1 === end) {
            end = document.cookie.length;
        }

        return unescape(document.cookie.substring(start, end));
    }

    return undefined;
}
/**
 * 删除cookie
 * @Author   zyt
 * @DateTime 2018-01-24T22:12:12+0800
 * @param    {String}                 name cookie的name
 * @return   {[type]}                      [description]
 */
function deleteCookie (name) {
    var setDay = new Date(),
        value = '';

    setDay.setDate(setDay.getDate() - 1);
    value = readCookie(name);

    if (undefined !== value) {
        document.cookie = name + '=' + value + ';expires=' + setDay.toGMTString();
    }
}




exports.setCookie = setCookie;
exports.readCookie = readCookie;
exports.deleteCookie = deleteCookie;