function tickets(peopleInLine) {
    var change = [];
    var okay = "YES";
    for (var i = 0; i < peopleInLine.length; i++) {
        if (change[peopleInLine[i]] == undefined) { //register change
            change[peopleInLine[i]] = 1;
        } else {
            change[peopleInLine[i]]++;
        }
        switch (peopleInLine[i]) {
            case 25:
                break;
            case 50:
                if (change['25'] > 0) {
                    change['25']--;
                } else {
                    okay = "NO";
                }
                break;
            case 100:
                if (change['50'] > 0 && change['25'] > 0) {
                    change['25']--;
                    change['50']--;
                } else if (change['25'] > 2) {
                    change['25'] -= 3;
                } else {
                    okay = "NO";
                }
                break;
        }
    }
    return okay;
}