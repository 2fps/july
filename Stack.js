/**
 * JS模拟栈
 * @Author   zyt
 * @DateTime 2018-04-06T22:06:36+0800
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
}
/**
 * Stack原型方法
 * @type {Object}
 */
Stack.prototype = {
    constructor : Stack,
    push : function(element) {      //压栈
        this.dataStore[this.top++] = element;
    },
    pop : function() {          //出栈
        return this.dataStore[--this.top];
    },
    peek : function() {         //对栈顶取值
        return this.dataStore[this.top - 1];
    },
    length : function() {
        return this.top;
    },
    clear : function() {
        this.top = 0;
    }
};

exports.Stack = Stack;