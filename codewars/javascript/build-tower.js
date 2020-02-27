function towerBuilder(nFloors) {
    var tower = [];
    var baseLen = 2 * nFloors - 1;
    for (var i = 0; i < nFloors; i++) {
        var star = 2 * i + 1;
        var space = (baseLen - star) / 2;
        tower.push(' '.repeat(space) + '*'.repeat(star) + ' '.repeat(space));
    }
    return tower;
}