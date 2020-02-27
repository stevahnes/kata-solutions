function validParentheses(parens) {
    var close = "";
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == "(") {
            close = ")" + close;
        } else if (parens[i] == close[0]) {
            close = close.substring(1, close.length);
        } else {
            return false;
            break;
        }
    }
    if (close.length == 0) {
        return true;
    } else {
        return false;
    }
}