/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring_2 = function (s) {
    var longest = 0;
    var reset = 0;
    var curr = "";
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] == undefined) {
            map[s[i]] = i;
            curr += s[i];
        } else {
            if (longest < curr.length) {
                longest = curr.length;
            }
            if (map[s[i]] > reset) {
                reset = map[s[i]];
            }
            curr = s.substring(reset + 1, i + 1);
            map[s[i]] = i;
        }
    }
    if (longest < curr.length) {
        longest = curr.length;
    }
    return longest;
};

var lengthOfLongestSubstring_1 = function (s) {
    var longest = 0;
    var reset = 0;
    var curr = "";
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] == undefined) {
            map[s[i]] = i;
            curr += s[i];
        } else {
            if (longest < curr.length) {
                longest = curr.length;
            }
            if (map[s[i]] > reset) {
                reset = map[s[i]];
            }
            curr = s.substring(reset + 1, i + 1);
            map[s[i]] = i;
        }
    }
    if (longest < curr.length) {
        longest = curr.length;
    }
    return longest;
};