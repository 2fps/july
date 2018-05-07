create = (function () {
    function F () {}

    return function (o) {
        if (arguments.length != 1) {
            throw new Error('Object.create implementation only accepts one parameter.');
        }

        F.prototype = o;

        return new F();
    };
})();

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