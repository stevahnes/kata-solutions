function humanReadable(seconds) {
    var hms = [Math.floor(seconds / 3600), Math.floor((seconds % 3600) / 60), ((seconds % 3600) % 60)];
    for (var i = 0; i < hms.length; i++) {
        if (Math.floor(hms[i] / 10) === 0) {
            hms[i] = '0' + hms[i].toString();
        }
    }
    return hms.join(':');
}