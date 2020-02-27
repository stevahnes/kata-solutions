/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr_3 = function (haystack, needle) {
    if (haystack.length == 0) {
        if (needle.length == 0) {
            return 0;
        } else {
            return -1;
        }
    } else {
        if (needle.length == 0) {
            return 0;
        } else if (haystack.length < needle.length) {
            return -1;
        } else {
            var j = 0;
            var result = -1;
            for (var i = 0; i < haystack.length; i++) {
                if (haystack[i] == needle[0]) {
                    j = 0;
                    result = i;
                    while (j < needle.length && haystack[i + j] == needle[j]) {
                        j++;
                    }
                }
                if (j == needle.length) {
                    return result;
                    break;
                } else if (haystack.length - 1 - i < needle.length) {
                    return -1;
                    break;
                }
            }
        }
    }
};

var strStr_2 = function (haystack, needle) {
    if (haystack.length == 0) {
        if (needle.length == 0) {
            return 0;
        } else {
            return -1;
        }
    } else {
        if (needle.length == 0) {
            return 0;
        } else if (haystack.length < needle.length) {
            return -1;
        } else {
            var i = 0;
            var j = 0;
            var result = -1;
            while (i < haystack.length) {
                if (haystack[i] == needle[0]) {
                    j = 0;
                    result = i;
                    while (j < needle.length && haystack[i + j] == needle[j]) {
                        j++;
                    }
                    i++;
                } else {
                    i++;
                }
                if (j == needle.length) {
                    return result;
                    break;
                } else if (haystack.length - i < needle.length) {
                    return -1;
                    break;
                }
            }
        }
    }
};

var strStr_1 = function (haystack, needle) {
    if (haystack.length == 0) {
        if (needle.length == 0) {
            return 0;
        } else {
            return -1;
        }
    } else {
        if (needle.length == 0) {
            return 0;
        } else if (haystack.length < needle.length) {
            return -1;
        } else {
            // var i = 0;
            var j = 0;
            var result = -1;
            for (var i = 0; i < haystack.length; i++) {
                // while (i < haystack.length) {
                if (haystack[i] == needle[0]) {
                    j = 0;
                    result = i;
                    while (j < needle.length && haystack[i + j] == needle[j]) {
                        j++;
                    }
                    // i++;
                    // } else {
                    // i++;
                }
                if (j == needle.length) {
                    return result;
                    break;
                } else if (haystack.length - i - 1 < needle.length) {
                    return -1;
                    break;
                }
            }
        }
    }
};