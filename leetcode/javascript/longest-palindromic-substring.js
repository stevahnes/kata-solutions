/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var ans = "";
    var i = 0;
    for (var i = 0; i < s.length; i++) {
        var j = s.length - 1;
        var start = i;
        var end = j;
        while (end - start > 0) {
            if (s[start] == s[end]) {
                start++;
                end--;
            } else {
                start = i;
                end = j - 1;
                j = end;
            }
        }
        if (ans.length < (j - i + 1)) {
            ans = s.substring(i, j + 1);
        }
    }
    return ans;
};