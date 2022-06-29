package lottery;

import java.util.Arrays;

public class RandomNumbers {

    public static int generateSingle(int range) {
        return (int)((Math.random() * range) + 1);
    }

    public static int[] generateSortedSet(int quantity, int range) {
        int[] mainNumbers = new int[quantity];
        for (int i = 0; i < quantity; i++) {

            //check for double
            int randomInt = 0;
            boolean alreadySet = true;
            while (alreadySet) {
                randomInt = generateSingle(range);
                alreadySet = false;
                for (int j = 0; j < i; j++) {
                    if (mainNumbers[j] == randomInt) {
                        alreadySet = true;
                        break;
                    }}
            }
            mainNumbers[i] = randomInt;
        }
        return Arrays.stream(mainNumbers).sorted().toArray();
    }
}