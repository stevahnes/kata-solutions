function dirReduc(arr) {
    var arrMap = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    };
    var i = 1;
    var arrLen = arr.length;
    while (i < arrLen) {
        if (arr[i - 1] == arrMap[arr[i]]) {
            arr.splice(i - 1, 2);
            arrLen = arr.length;
        } else if (arr[i + 1] == arrMap[arr[i]]) {
            arr.splice(i, 2);
            arrLen = arr.length;
        } else {
            i++;
        }
    }
    return arr;
}