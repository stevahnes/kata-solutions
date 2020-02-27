function validBraces(braces) {
    var closure = "";
    var isValid = true;
    for (var i = 0; i < braces.length; i++) {
        if (isValid == false) {
            break;
        }
        switch (braces[i]) {
            case "(":
                closure = ")" + closure;
                break;
            case "{":
                closure = "}" + closure;
                break;
            case "[":
                closure = "]" + closure;
                break;
            case ")":
                if (closure[0] == ")") {
                    closure = closure.slice(1, closure.length);
                } else {
                    isValid = false;
                }
                break;
            case "}":
                if (closure[0] == "}") {
                    closure = closure.slice(1, closure.length);
                } else {
                    isValid = false;
                }
                break;
            case "]":
                if (closure[0] == "]") {
                    closure = closure.slice(1, closure.length);
                } else {
                    isValid = false;
                }
                break;
        }
    }
    if (closure.length == 0) {
        return isValid;
    } else {
        return false;
    }
}