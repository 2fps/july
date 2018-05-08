/**
 * 判断是否是邮箱
 * @Author   zyt
 * @DateTime 2018-05-08T21:45:09+0800
 * @param    {String}                 str 邮箱字符串
 * @return   {Boolean}                    是否是邮箱地址
 */
function isEmail (str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 * 判断是否是省份证号
 * @Author   zyt
 * @DateTime 2018-05-08T21:46:01+0800
 * @param    {String}                 str 省份证字符串
 * @return   {Boolean}                    是否是身份证号
 */
function isIdCard (str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
}

exports.isEmail = isEmail;
exports.isIdCard = isIdCard;