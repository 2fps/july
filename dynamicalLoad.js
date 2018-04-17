/**
 * 动态加载css样式文件
 * @Author   zyt
 * @DateTime 2018-04-17T21:05:21+0800
 * @param    {String}                 url css文件路径
 */
function loadStyle (url) {
    try {
        document.createStyleSheet(url);
    } catch(e) {
        var cssLink = document.createElement('link');
        var head = document.getElementsByTagName('head')[0];

        cssLink.rel = 'stylesheet';
        cssLink.type = 'text/css';
        cssLink.href = url;
        head.appendChild(cssLink);
    }
}


exports.loadStyle = loadStyle;