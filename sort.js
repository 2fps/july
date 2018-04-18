/**
 * 用JS实现各排序算法
 */

/**
 * 冒泡排序
 * @Author   zyt
 * @DateTime 2018-04-18T22:20:41+0800
 * @param    {Array}                 arr    要排序的数组
 * @return   {Array}                        排完序后的数组
 */
function bubbleSort (arr) {
    var len = arr.length,
        temp = 0;

    for (var i = 0; i < len; ++i) {
        for (var j = 0; j < len - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

exports.bubbleSort = bubbleSort;