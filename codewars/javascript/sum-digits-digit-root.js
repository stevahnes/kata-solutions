function digital_root(n) {
    var sum = 0;
    while (Math.floor(n / 10) !== 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    sum += n;
    if (Math.floor(sum / 10) !== 0) {
        return digital_root(sum);
    } else {
        return sum;
    }
}