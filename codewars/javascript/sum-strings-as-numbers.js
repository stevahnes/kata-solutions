function sumStrings(a, b) {
    if (a == "") {
        return b
    } else if (b == "") {
        return b
    } else {
        var result = "";
        var maxLen = Math.max(a.length, b.length);
        if (parseInt(a) < parseInt(b)) {
            a = ("0".repeat(maxLen - a.length)) + a;
        } else {
            b = ("0".repeat(maxLen - b.length)) + b;
        }
        a = a.split("").reverse();
        b = b.split("").reverse();
        var rem = 0;
        for (var i = 0; i < maxLen; i++) {
            var subSum = parseInt(a[i]) + parseInt(b[i]) + rem;
            result = subSum % 10 + result;
            var rem = Math.floor(subSum / 10);
        }
        if (rem != 0) {
            result = rem + result;
        }
        while (result[0] == '0') {
            result = result.slice(1, result.length);
        }
        return result;
    }
}