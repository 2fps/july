/**
 * 获取文件大小
 * @Author   zyt
 * @DateTime 2018-04-29T22:34:27+0800
 * @param    {Object}                 obj 文件对象
 * @return   {Number}                     文件大小
 */
function getFileSize (obj) {
    var filesize;

    if (obj.files) {
        filesize = obj.files[0].size;
    } else {
        try {
            var path,
                fso;

            path = document.getElementById('filePath').value;
            fso = new ActiveXObject("Scripting.FileSystemObject");
            filesize = fso.GetFile(path).size;
        } catch(e) {
            //在IE9及低版本浏览器，如果不容许ActiveX控件与页面交互，点击了否，就无法获取size
            console.log(e.message); //Automation 服务器不能创建对象
            filesize = 'error'; //无法获取
        }
    }

    return filesize;
}

exports.getFileSize = getFileSize;