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

/**
 * 选择排序
 * @Author   zyt
 * @DateTime 2018-04-19T23:02:51+0800
 * @param    {Array}                 arr    要排序的数组
 * @return   {Array}                        排完序后的数组
 */
function selectionSort (arr) {
    var len = arr.length,
        min,
        temp;

    for (var i = 0; i < len - 1; ++i) {
        min = i;
        for (var j = i + 1; j < len; ++j) { // 寻找最小的数
            if (arr[j] < arr[min]) {
                min = j; // 保存下标
            }
        }
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

exports.bubbleSort = bubbleSort;
exports.selectionSort = selectionSort;