public class TenMinWalk {
    public static boolean isValid(char[] walk) {
        if (walk.length != 10) {
            return false;
        } else {
            int[] coord = { 0, 0 };
            for (int i = 0; i < walk.length; i++) {
                switch (walk[i]) {
                    case 'n':
                        coord[1]++;
                        break;
                    case 'e':
                        coord[0]++;
                        break;
                    case 's':
                        coord[1]--;
                        break;
                    case 'w':
                        coord[0]--;
                        break;
                }
            }
            if (coord[0] == 0 && coord[1] == 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}