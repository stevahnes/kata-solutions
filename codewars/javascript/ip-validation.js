function isValidIP(str) {
    str = str.split('.');
    if (str.length != 4) {
        return false;
    } else {
        var yesNo = true;
        for (var i = 0; i < str.length; i++) {
            if (parseInt(str[i]) > 255 || Boolean(str[i].match(/[A-Za-z]/)) == true) {
                yesNo = false;
                break;
            } else {
                if (str[i].length == 3 && parseInt(str[i]) < 100) {
                    yesNo = false;
                    break;
                } else if (str[i].length == 2 && parseInt(str[i]) < 10) {
                    yesNo = false;
                    break;
                }
            }
        }
    }
    return yesNo;
}