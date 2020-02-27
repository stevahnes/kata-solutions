function solution_2(roman) {
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var numeral = 0;
    roman = roman.split("");
    for (var i = 0; i < roman.length; i++) {
        if (roman[i + 1] !== undefined) {
            if (romanMap[roman[i]] < romanMap[roman[i + 1]]) {
                numeral -= romanMap[roman[i]];
            } else {
                numeral += romanMap[roman[i]];
            }
        } else {
            numeral += romanMap[roman[i]];
        }
    }
    return numeral;
}

function solution_1(roman) {
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var numeral = 0;
    roman = roman.split("");
    for (var i = 0; i < roman.length; i++) {
        if (roman[i + 1] !== undefined) {
            if (roman[i] == roman[i + 1]) {
                numeral += romanMap[roman[i]];
            } else if (romanMap[roman[i]] > romanMap[roman[i + 1]]) {
                numeral += romanMap[roman[i]];
            } else if (romanMap[roman[i]] < romanMap[roman[i + 1]]) {
                numeral -= romanMap[roman[i]];
            }
        } else {
            numeral += romanMap[roman[i]];
        }
    }
    return numeral;
}