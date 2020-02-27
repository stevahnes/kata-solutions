public class Tortoise_2 {
    public static int[] race(int v1, int v2, int g) {
        if (v1 >= v2) {
            return null;
        } else {
            int time = (g * 3600) / (v2 - v1);
            return new int[] { (int) Math.floor(time / 3600), (int) Math.floor(time % 3600 / 60),
                    (int) Math.floor(time % 60) };
        }
    }
}

public class Tortoise_1 {
    public static int[] race(int v1, int v2, int g) {
        if (v1 >= v2) {
            return null;
        } else {
            int[] timeHMS = new int[3];
            int vDiff = v2 - v1;
            float t = (float) g / vDiff;
            int h = (int) Math.floor(t);
            int m = (int) Math.floor((t - h) * 60);
            int s = (int) Math.floor(((t - h) * 60 - m) * 60);
            timeHMS[0] = h;
            timeHMS[1] = m;
            timeHMS[2] = s;
            return timeHMS;
        }
    }
}