function solution(str) {
    var sol = [];
    while (str.length > 2) {
        sol.push(str.slice(0, 2));
        str = str.slice(2, str.length);
    }
    if (str.length < 2) {
        sol.push(str + "_");
    } else {
        sol.push(str);
    }
    return sol;
}