/**
 * 将16进制的颜色值转成rgb值
 * @Author   zyt
 * @DateTime 2018-05-25T23:09:38+0800
 * @param    {String}                 str 16进制颜色值
 * @return   {String}                     rgb值
 */
function colorRgb(str) {
    var colorString = str.toLowerCase(),
        reg = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/.exec(colorString),
        result = '';

    if (colorString && reg) {
        // 颜色输入正确
        result += 'rgb(';
        result += ('0x' + reg[1] - 0) + ',';
        result += ('0x' + reg[2] - 0) + ',';
        result += ('0x' + reg[3] - 0);
        result += ')';
    }

    return result;
}

/**
 * 将rgb值转成16进制值
 * @Author   zyt
 * @DateTime 2018-05-26T21:33:21+0800
 * @param    {String}                 str rgb值
 * @return   {String}                     16进制值
 */
function colorHex(str) {
    var reg = /^rgb\((\d+),(\d+),(\d+)\)$/.exec(str),
        result = '#';

    result += zeroPadding((+reg[1]).toString(16));
    result += zeroPadding((+reg[2]).toString(16));
    result += zeroPadding((+reg[3]).toString(16));

    return result;
}

/**
 * 数字补零到2位数（后期移走）
 * @Author   zyt
 * @DateTime 2018-05-26T21:34:09+0800
 * @param    {String}                 num 字符串形式的二位数字
 * @return   {String}                     补零后的字符串值
 */
function zeroPadding(num) {
    var result = '';

    if (num.length < 2) {
        result = '0' + num;
    } else {
        result = '' + num;
    }

    return result;
}

exports.colorRgb = colorRgb;
exports.colorHex = colorHex;