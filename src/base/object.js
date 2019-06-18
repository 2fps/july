/**
 * 低版本IE下Object.create的兼容方案
 * @Author   zyt
 * @DateTime 2018-05-15T21:42:56+0800
 * @param    {Object}                 proto 需要继承的对象
 * @return   {Object}                       新的对象
 */
function create (proto) {
    var f = function () {};

    f.prototype = proto;

    return new f();
}

/**
 * 检测对象是否是空对象，如{}
 * @Author   zyt
 * @DateTime 2018-05-07T22:32:51+0800
 * @param    {Object}                 obj 要检测的对象
 * @return   {Boolean}                    是否是空对象
 */
function isEmptyObject (obj) {
    var name;

    for (name in obj) {
        return false;
    }
    return true;
}



exports.create = create;
exports.isEmptyObject = isEmptyObject;