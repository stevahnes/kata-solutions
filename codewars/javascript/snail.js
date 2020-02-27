snail = function (array, curr, dir, res) {
    if (array[0].length == 0) {
        return [];
    } else {
        var arraycopy = array;
        if (curr === undefined) {
            curr = [0, 0]
        };
        if (dir === undefined) {
            dir = "r"
        };
        if (res === undefined) {
            res = []
        };
        if (arraycopy[curr[0]][curr[1]] != -1) {
            res.push(arraycopy[curr[0]][curr[1]]);
        }
        arraycopy[curr[0]][curr[1]] = -1; //update traversed
        if (res.length == array[0].length * array[0].length) {
            return res;
        } else {
            if (dir == 'r') {
                if ((curr[1] + 1) < array[0].length) {
                    if (arraycopy[curr[0]][curr[1] + 1] != -1) {
                        curr[1] += 1; //update move
                        return snail(arraycopy, curr, dir, res); // move
                    } else {
                        dir = 'd';
                        return snail(arraycopy, curr, dir, res); // move
                    }
                } else {
                    dir = 'd';
                    return snail(arraycopy, curr, dir, res); // move
                }
            } else if (dir == 'l') {
                if ((curr[1] - 1) > -1) {
                    if (arraycopy[curr[0]][curr[1] - 1] != -1) {
                        curr[1] -= 1; //update move
                        return snail(arraycopy, curr, dir, res); // move
                    } else {
                        dir = 'u';
                        return snail(arraycopy, curr, dir, res); // move
                    }
                } else {
                    dir = 'u';
                    return snail(arraycopy, curr, dir, res); // move
                }
            } else if (dir == 'd') {
                if ((curr[0] + 1) < array[0].length) {
                    if (arraycopy[curr[0] + 1][curr[1]] != -1) {
                        curr[0] += 1; //update move
                        return snail(arraycopy, curr, dir, res); // move
                    } else {
                        dir = 'l';
                        return snail(arraycopy, curr, dir, res); // move
                    }
                } else {
                    dir = 'l';
                    return snail(arraycopy, curr, dir, res); // move
                }
            } else if (dir == 'u') {
                if ((curr[0] - 1) > -1) {
                    if (arraycopy[curr[0] - 1][curr[1]] != -1) {
                        curr[0] -= 1; //update move
                        return snail(arraycopy, curr, dir, res); // move
                    } else {
                        dir = 'r';
                        return snail(arraycopy, curr, dir, res); // move
                    }
                } else {
                    dir = 'r';
                    return snail(arraycopy, curr, dir, res); // move
                }
            }
        }
    }
}