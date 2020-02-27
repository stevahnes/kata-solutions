public class FindOdd {
    public static int findIt(int[] A) {
        if (A.length == 1) {
            return A[0];
        } else {
            java.util.Arrays.sort(A);
            int i = 0;
            int res = -1;
            while (i < A.length) {
                if (i == A.length - 1) {
                    res = A[i];
                    break;
                }
                if (A[i] == A[i + 1]) {
                    i += 2;
                } else {
                    System.out.println(A[i]);
                    res = A[i];
                    break;
                }
            }
            return res;
        }
    }
}