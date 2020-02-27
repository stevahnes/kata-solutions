class Persist {
    public static int persistence(long n) {
        int count = 0;
        while (n / 10 != 0) {
            count++;
            int len = String.valueOf(n).length();
            long mult = 1;
            for (int i = 0; i < len; i++) {
                mult *= n % 10;
                n = n / 10;
            }
            n = mult;
        }
        return count;
    }
}