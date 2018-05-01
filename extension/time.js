/**
 * 获取当前时间
 * @Author   zyt
 * @DateTime 2018-04-25T23:30:47+0800
 * @return   {String}                 当前时间，格式是 年月日时-分割，时分秒是:分割
 */
function getCurrentTime () {
    var now = new Date(),
        year = now.getFullYear(),       // 年
        month = now.getMonth() + 1,     // 月
        day = now.getDate(),            // 日
        hh = now.getHours(),            // 时
        mm = now.getMinutes(),          // 分
        ss = now.getSeconds(),          // 秒
        res = '';

    res = year + '-' + addZero(month) + '-' + addZero(day) + ' '
        +addZero(hh) + ':' + addZero(mm) + ':' + addZero(ss);

    return res;
}

/**
 * 不足两位的前面补0
 * @Author   zyt
 * @DateTime 2018-04-25T23:31:13+0800
 * @param    {Number|String}                 val 要修改的值
 */
function addZero (val) {
    val += '';

    if (val.length < 2) {
        val = '0' + val;
    }

    return val;
}

exports.getCurrentTime = getCurrentTime;