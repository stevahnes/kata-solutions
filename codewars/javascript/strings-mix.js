function mix(s1, s2) {
    s1 = s1.split(" ").join("").split("");
    s2 = s2.split(" ").join("").split("");
    var charList = [];
    var resultList = [];
    for (var i = 0; i < s1.length; i++) {
        if (charList[s1[i]] === undefined) {
            charList[s1[i]] = [1, 0];
        } else {
            charList[s1[i]][0]++;
        }
    }
    for (var j = 0; j < s2.length; j++) {
        if (charList[s2[j]] === undefined) {
            charList[s2[j]] = [0, 1];
        } else {
            charList[s2[j]][1]++;
        }
    }
    var keys = Object.keys(charList);
    for (var k = 0; k < keys.length; k++) {
        if (Boolean(keys[k].match(/[a-z]/)) === true) {
            var maxRep = Math.max.apply(Math, charList[keys[k]]);
            if (maxRep > 1) {
                var strNum;
                if (charList[keys[k]][0] === charList[keys[k]][1]) {
                    strNum = '=';
                } else {
                    strNum = (charList[keys[k]].indexOf(maxRep) + 1).toString();
                }
                resultList.push(strNum + ":" + keys[k].repeat(maxRep));
            }
        }
    }
    resultList.sort(function (a, b) {
        if (a.length < b.length) {
            return 1;
        } else if (a.length > b.length) {
            return -1;
        } else {
            if (b[0] < a[0]) {
                return 1;
            } else if (b[0] > a[0]) {
                return -1;
            } else {
                if (b[2] < a[2]) {
                    return 1;
                } else {
                    return -1;
                }
            }
        }
    });
    return resultList.join("/");
}