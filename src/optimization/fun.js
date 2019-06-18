
/**
 * 函数实例化，不使用new关键字
 * @Author   zyt
 * @DateTime 2018-04-30T15:57:12+0800
 * @param    {...}                 options 实例化的参数
 */
function Instantiation(options) {
    if (!(this instanceof Instantiation)) {
        return new Instantiation(options);
    }
}