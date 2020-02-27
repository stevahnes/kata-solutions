var moveZeros = function (arr) {
    var arrLen = arr.length;
    for (var i = arrLen - 1; i > -1; i--) {
        if (arr[i] === 0) {
            arr.push(arr.splice(i, 1)[0]);
        }
    }
    return arr;
}