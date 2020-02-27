function solution(number) {
    var numMap = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    };
    var romanArr = [];
    var counter = 0;
    while (number.toString() != '0') {
        var digit = number % 10;
        if (digit != 0 && counter < 3) {
            if (digit < 5) {
                if (digit != 4) {
                    romanArr.push(numMap[1 * Math.pow(10, counter)].repeat(digit));
                } else {
                    romanArr.push(numMap[1 * Math.pow(10, counter)] + numMap[5 * Math.pow(10, counter)]);
                }
            } else {
                if (digit == 9) {
                    romanArr.push(numMap[Math.pow(10, counter)] + numMap[Math.pow(10, counter + 1)])
                } else {
                    romanArr.push(numMap[5 * Math.pow(10, counter)] + numMap[1 * Math.pow(10, counter)].repeat(digit - 5));
                }
            }
        } else {
            romanArr.push(numMap[1 * Math.pow(10, counter)].repeat(digit));
        }
        number = Math.floor(number / 10);
        counter++;
    }
    console.log(counter, romanArr);
    return romanArr.reverse().join("");
}