public class Max {
    public static int sequence(int[] arr) {
        int savedSum = 0;
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                if (sum < 0) { // restart if sum as of now is < 0
                    sum = arr[i];
                } else {
                    sum += arr[i];
                }
            } else {
                if (savedSum < sum) { // restart if it's bigger than before
                    savedSum = sum;
                }
                sum += arr[i];
            }
        }
        if (savedSum < sum) { // final check
            savedSum = sum;
        }
        if (savedSum < 0) {
            return 0;
        } else {
            return savedSum;
        }
    }
}