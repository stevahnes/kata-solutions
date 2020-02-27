function firstNonRepeatingLetter(s) {
    var countArray = [];
    var sLen = s.length;
    for (var i = 0; i < sLen; i++) {
        if (countArray[s[i].toLowerCase()] === undefined) {
            countArray[s[i].toLowerCase()] = 1;
        } else {
            countArray[s[i].toLowerCase()]++;
        }
    }
    var result = '';
    for (var j = 0; j < sLen; j++) {
        if (countArray[s[j].toLowerCase()] === 1) {
            result = s[j];
            break;
        }
    }
    return result;
}