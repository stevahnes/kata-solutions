function whoIsNext(names, r) {
    var nLen = names.length;
    if (r <= nLen) {
        return names[r - 1];
    } else {
        var completeLoops = Math.floor(Math.log(Math.floor(r / nLen + 1)) / Math.log(2));
        var remCoke = r - ((Math.pow(2, completeLoops) - 1) * nLen);
        if (remCoke == 0) { // handles when loop ends at last person without any remainder
            return names[nLen - 1];
        } else { //cycle through incomplete loop
            var dupl = Math.pow(2, completeLoops);
            var counter = 0;
            while (remCoke > dupl) {
                remCoke -= dupl;
                counter++;
            }
            return names[counter];
        }
    }
}