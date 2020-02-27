public class Dubstep {
    public static String SongDecoder(String song) {
        String decoded = "";
        int i = 0;
        boolean dubbing = false;
        while (i < song.length()) {
            if (song.charAt(i) != 'W') {
                if (!(i >= song.length() || decoded.length() == 0) && dubbing) {
                    decoded += ' ';
                }
                decoded += song.charAt(i);
                i++;
                dubbing = false;
            } else {
                if (song.charAt(i + 1) == 'U' && song.charAt(i + 2) == 'B') {
                    i += 3;
                    dubbing = true;
                } else {
                    if (!(i >= song.length() || decoded.length() == 0) && dubbing) {
                        decoded += ' ';
                    }
                    decoded += song.charAt(i);
                    i++;
                    dubbing = false;
                }
            }
        }
        return decoded;
    }
}