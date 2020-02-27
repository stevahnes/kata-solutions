function pigIt(str) {
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        if (Boolean(str[i].match(/[A-Za-z]/)) == true) {
            var lead = str[i].slice(0, 1);
            str[i] = str[i].slice(1, str[i].length);
            str[i] += lead + 'ay';
        }
    }
    return str.join(" ");
}