/**
 * 简单实现XHR
 * @Author   zyt
 * @DateTime 2018-04-09T22:07:00+0800
 * @return   {Object}                 XHR对象实例
 */
function createXHR (){
    if (typeof XMLHttpRequest !== "undefined"){
        return new XMLHttpRequest ();
    } else if (typeof ActiveXObject !== "undefined") {
        if (typeof arguments.callee.activeXString !== "string"){
            var version = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                i,
                len;

            for (i = 0, len = version.length; i < len; i++){
                try {
                    new ActiveXObject(version[i]);
                    arguments.callee.activeXString = version[i];
                    break;
                } catch (e){

                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("NO XHR object availvable.");
    }
}

exports.createXHR = createXHR;