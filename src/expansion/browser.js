/**
 * 计算浏览器下默认滚动条的宽度
 * @Author   zyt
 * @DateTime 2018-04-11T22:46:30+0800
 * @return   {Number}                 浏览器滚动条的宽度
 */
function getScrollWidth() {
    var noScroll,
        scroll,
        oDiv = document.createElement("DIV");

    oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
    // 获取添加到页面上的元素的宽度
    noScroll = document.body.appendChild(oDiv).clientWidth;
    // 设置出滚动条
    oDiv.style.overflowY = "scroll";
    scroll = oDiv.clientWidth;
    // 移除该元素
    document.body.removeChild(oDiv);

    return noScroll - scroll;
}

exports.getScrollWidth = getScrollWidth;