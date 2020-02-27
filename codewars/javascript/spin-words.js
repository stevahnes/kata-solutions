function spinWords(str) {
    var str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > 4) {
            str[i] = str[i].split("").reverse().join("");
        }
    }
    return str.join(" ");
}