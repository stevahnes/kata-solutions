function longestConsec(strarr, k) {
    var arrLen = strarr.length;
    if (k <= 0 || arrLen == 0 || k > arrLen) {
        return "";
    } else {
        var currconsec = "";
        for (var i = 0; i < (arrLen - k + 1); i++) {
            var consec = "";
            for (var j = i; j < k + i; j++) {
                consec += strarr[j];
            }
            if (currconsec.length < consec.length) {
                currconsec = consec;
            }
        }
    }
    return currconsec;
}