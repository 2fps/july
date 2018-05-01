/**
 * js模拟实现List
 * @Author   zyt
 * @DateTime 2018-04-24T23:06:52+0800
 */
function List() {
    this.listSize = 0;          //列表元素个数
    this.pos = 0;               //列表当前位置（指针）
    this.dataStore = [];            //用于保存列表元素
}
List.prototype = {
    constructor : List,
    clear : function() {            //清空列表
        delete this.dataSize;
        this.dataSize = [];
        this.listSize = this.pos = 0;
    },
    length : function() {           //返回列表中的元素个数
        return this.listSize;
    },
    append : function(element) {        //列表添加元素
        this.dataStore[this.listSize++] = element;
    },
    find : function(element) {      //查找列表中的元素
        for (var i = 0, len = this.dataStore.length; i < len; ++i) {
            if (element == this.dataStore[i]) {
                return i;
            }
        }
        return -1;
    },
    toString : function() {         //显示列表中的元素
        return this.dataStore;
    },
    insert : function(element, after) { //列表插入元素
        var insertPos = find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    },
    remove : function(element) {        //列表删除元素
        var found = this.find(element);
        if (found > -1) {
            this.dataStore.splice(found, 1);
            --this.listSize;
            return true;
        } else {
            return false;
        }
    },
    contain : function(element) {       //判断元素是否在列表中
        for (var i = 0, len = this.dataStore.length; i < len; ++i) {
            if (element == this.dataStore[i]) {
                return true;
            }
        }
        return false;
    },
    /*迭代器遍历访问列表*/
    front : function() {            //最前
        this.pos = 0;
    },
    end : function() {
        this.pos = this.listSize - 1;   //最后
    },
    prev : function() {         //前移
        if (this.pos > 0) {
            --this.pos;
        }
    },
    next : function() {         //后退
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    },
    currPos : function() {          //现在指针位置
        return this.pos;
    },
    moveTo : function(position) {       //移动指针
        this.pos = position;
    },
    get : function() {          //获得当前指针位置的值
        return this.dataStore[this.pos];
    }
};

exports.List = List;