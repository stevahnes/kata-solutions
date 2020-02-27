public class Solution {
    public static int bowling_score(String frames) {
        System.out.println(frames);
        String[] frameArray = frames.split(" ");
        System.out.println(frameArray);
        int score = 0;
        int isStrike = 0;
        boolean isSpare = false;
        for (int i = 0; i < frameArray.length; i++) {
            System.out.println(score);
            if (i < frameArray.length - 1) {
                if (frameArray[i].length() == 1) {
                    if (isSpare) {
                        score += 2 * 10;
                        isSpare = false;
                    } else if (isStrike > 2) {
                        score += 3 * 10;
                        isStrike -= 2;
                    } else if (isStrike > 0) {
                        score += 2 * 10;
                        isStrike -= 1;
                    } else {
                        score += 10;
                    }
                    isStrike += 2;
                } else {
                    String firstScore = frameArray[i].substring(0, 1);
                    String secondScore = frameArray[i].substring(1, 2);
                    if (isSpare) {
                        score += 2 * Integer.parseInt(firstScore);
                        isSpare = false;
                    } else if (isStrike > 2) {
                        score += 3 * Integer.parseInt(firstScore);
                        isStrike -= 2;
                    } else if (isStrike > 0) {
                        score += 2 * Integer.parseInt(firstScore);
                        isStrike -= 1;
                    } else {
                        score += Integer.parseInt(firstScore);
                    }
                    if (secondScore.equals("/")) {
                        if (isStrike > 2) {
                            score = score - 3 * Integer.parseInt(firstScore) + 3 * 10;
                            isStrike -= 2;
                        } else if (isStrike > 0) {
                            score = score - 2 * Integer.parseInt(firstScore) + 2 * 10;
                            isStrike -= 1;
                        } else {
                            score = score - Integer.parseInt(firstScore) + 10;
                        }
                        isSpare = true;
                    } else {
                        if (isStrike > 2) {
                            score += 3 * Integer.parseInt(secondScore);
                            isStrike -= 2;
                        } else if (isStrike > 0) {
                            score += 2 * Integer.parseInt(secondScore);
                            isStrike -= 1;
                        } else {
                            score += Integer.parseInt(secondScore);
                        }
                    }
                }
            } else {
                for (int j = 0; j < frameArray[i].length(); j++) {
                    if (frameArray[i].substring(j, j + 1).equals("X")) {
                        if (isSpare) {
                            score += 2 * 10;
                            isSpare = false;
                        } else if (isStrike > 2) {
                            score += 3 * 10;
                            isStrike -= 2;
                        } else if (isStrike > 0) {
                            score += 2 * 10;
                            isStrike -= 1;
                        } else {
                            score += 10;
                        }
                    } else if (frameArray[i].substring(j, j + 1).equals("/")) {
                        if (isStrike > 2) {
                            score = score - 3 * Integer.parseInt(frameArray[i].substring(j - 1, j)) + 3 * 10;
                            isStrike -= 2;
                        } else if (isStrike > 0) {
                            score = score - 2 * Integer.parseInt(frameArray[i].substring(j - 1, j)) + 2 * 10;
                            isStrike -= 1;
                        } else {
                            score = score - Integer.parseInt(frameArray[i].substring(j - 1, j)) + 10;
                        }
                    } else {
                        if (isSpare) {
                            score += 2 * Integer.parseInt(frameArray[i].substring(j, j + 1));
                            isSpare = false;
                        } else if (isStrike > 2) {
                            score += 3 * Integer.parseInt(frameArray[i].substring(j, j + 1));
                            isStrike -= 2;
                        } else if (isStrike > 0) {
                            score += 2 * Integer.parseInt(frameArray[i].substring(j, j + 1));
                            isStrike -= 1;
                        } else {
                            score += Integer.parseInt(frameArray[i].substring(j, j + 1));
                        }
                    }
                }
            }
        }
        System.out.println(score);
        return score;
    }
}