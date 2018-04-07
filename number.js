/**
 * 判断是否是数字或数字型字符串，不包括Number.POSITIVE_INFINITY、
 * Number.NEGATIVE_INFINITY、NaN
 * @Author   zyt
 * @DateTime 2018-04-06T21:58:32+0800
 * @param    {[type]}                 value 需要判断的内容
 * @return   {Boolean}                      是或不是
 */
function isDigit (value) {
    var patrn = /^[0-9]*$/;

    if (patrn.exec(value) == null || value == "") {
        return false;
    } else {
        return true;
    }
}

exports.isDigit = isDigit;