public class Kata {
    public static int[] foldArray(int[] array, int runs) {
        if (array.length == 1 || runs == 0) {
            return array;
        } else {
            int halfLength = array.length / 2;
            if (array.length % 2 != 0) {
                int[] halfArray = new int[halfLength + 1];
                for (int i = 0; i < halfLength; i++) {
                    halfArray[i] = array[i] + array[array.length - i - 1];
                }
                halfArray[halfLength] = array[halfLength];
                return foldArray(halfArray, runs - 1);
            } else {
                int[] halfArray = new int[halfLength];
                for (int i = 0; i < halfLength; i++) {
                    halfArray[i] = array[i] + array[array.length - i - 1];
                }
                return foldArray(halfArray, runs - 1);
            }
        }
    }
}