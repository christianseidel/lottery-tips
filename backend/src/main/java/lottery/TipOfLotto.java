package lottery;

import java.util.Arrays;

class TipOfLotto {
    public int[][] mainNumbers;
    public int bonusNumber;

    public TipOfLotto(int numberOfFields) {
        this.mainNumbers = new int[numberOfFields][6];
        for (int i = 0; i < numberOfFields; i++) {
            mainNumbers[i] = RandomNumbers.generateSortedSet(6, 49);
        }
        this.bonusNumber = RandomNumbers.generateSingle(10)-1;
    }

    @Override
    public String toString() {
        return "Lotto" + "\n6aus49: " + Arrays.deepToString(mainNumbers) + "\nZusatzzahl: " + bonusNumber;
    }
}