/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0 || strs.length === 1) {
        return strs.toString();
    } else {
        var template = strs[0];
        for (var i = 0; i < strs.length - 1; i++) { // get shortest string as template
            if (strs[i].length > strs[i + 1].length) {
                template = strs[i + 1];
            }
        }
        var tempLen = template.length;
        var same = true;
        var index = -1;
        for (var i = 0; i < template.length; i++) {
            for (var j = 0; j < strs.length; j++) {
                if (strs[j][i] !== template[i]) {
                    same = false;
                }
            }
            if (same === false) {
                index = i;
                break;
            } else {
                index = i + 1;
            }
        }
        return template.slice(0, index);
    }
};