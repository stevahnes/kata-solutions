function expandedForm(num) {
    var expanded = [];
    var numStr = num.toString();
    var numLen = numStr.length;
    for (var i = 0; i < numLen; i++) {
        if (numStr[i] !== '0') {
            expanded.push(parseInt(numStr[i]) * Math.pow(10, (numLen - 1 - i)));
        }
    }
    return expanded.join(' + ');
}