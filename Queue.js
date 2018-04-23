/**
 * JS模拟队列
 * @Author   zyt
 * @DateTime 2018-04-23T23:04:09+0800
 */
function Queue() {
    this.dataStore = [];
}
/**
 * Queue原型方法
 * @type {Object}
 */
Queue.prototype = {
    constructor : Queue,
    enqueue : function(element) {   //队列末尾添加元素
        this.dataStore.push(element);
    },
    dequeue : function() {          //删除堆首元素
        return this.dataStore.shift();
    },
    front : function() {            //取队首元素
        return this.dataStore[0];
    },
    back : function() {         //取队尾元素
        return this.dataStore[this.dataStore.length - 1];
    },
    toString : function() {         //显示队列所有元素
        var restr = '';

        for (var i = 0, len = this.dataStore.length; i < len; ++i) {
            restr += this.dataStore[i] + '\n';
        }

        return restr;
    },
    empty : function() {            //判断队列是否为空
        if (0 == this.dataStore.length) {
            return true;
        } else {
            return false;
        }
    }
};

exports.Queue = Queue;