function likes(names) {
    if (names.length == 0) {
        return ("no one likes this");
    } else if (names.length == 1) {
        return names[0] + " likes this";
    } else if (names.length == 2) {
        return names.join(" and ") + " like this";
    } else {
        if (names.length > 3) {
            var otherNum = names.length - 2;
            names = names.splice(0, 2);
            names.push(otherNum + " others");
        }
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    }
}