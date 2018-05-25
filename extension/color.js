/**
 * 将16进制的颜色值转成rgb值
 * @Author   zyt
 * @DateTime 2018-05-25T23:09:38+0800
 * @param    {[type]}                 str [description]
 * @return   {[type]}                     [description]
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

exports.colorRgb = colorRgb;