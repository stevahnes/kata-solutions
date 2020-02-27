
// Make sure your class is public
import java.util.Arrays;

public class Kata {
    public static double findUniq(double arr[]) {
        Arrays.sort(arr);
        int i = 0;
        double result = arr[0];
        while (i < arr.length) {
            if (i == arr.length - 1) {
                result = arr[i];
                break;
            } else {
                if (arr[i] == arr[i + 1]) {
                    i += 2;
                } else {
                    if (i == 0) {
                        result = arr[i];
                        break;
                    } else if (arr[i] == arr[i - 1]) {
                        i++;
                    } else {
                        result = arr[i];
                        break;
                    }
                }
            }
        }
        return result;
    }
}