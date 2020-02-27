decodeMorse = function (morseCode) {
    morseCode = morseCode.split("   ");
    var parsedCode = [];
    for (var i = 0; i < morseCode.length; i++) {
        var parsed = [];
        if (morseCode[i] !== '') {
            morseCode[i] = morseCode[i].split(" ").forEach(x => parsed.push(MORSE_CODE[x]));
            parsedCode.push(parsed.join(""));
        }
    }
    return parsedCode.join(" ");
}