public class ProdFib { // must be public for codewars

    public static long[] productFib(long prod) {
        System.out.println(prod);
        int n = 0;
        long botF = F(n);
        long highF = F(n + 1);
        while (botF * highF < prod) {
            n++;
            botF = F(n);
            highF = F(n + 1);
        }
        if (botF * highF == prod) {
            return new long[] { botF, highF, 1 };
        } else {
            return new long[] { botF, highF, 0 };
        }
    }

    public static long F(int n) {
        if (n == 0) {
            return 0;
        } else if (n < 3) {
            return 1;
        } else {
            long prevOne = 0;
            long prevTwo = 1;
            long curr = 1;
            for (int i = 0; i < n - 3; i++) {
                prevOne = prevTwo;
                prevTwo = curr;
                curr = prevOne + prevTwo;
            }
            return curr;
        }
    }
}