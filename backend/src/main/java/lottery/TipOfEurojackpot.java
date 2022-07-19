package lottery;

import java.util.Arrays;

public class TipOfEurojackpot {
    public int[] fiveOutOfFifty;
    public int[] twoOutOfTwelve;

    public TipOfEurojackpot() {
        this.fiveOutOfFifty = RandomNumbers.generateSortedSet(5, 50);
        this.twoOutOfTwelve = RandomNumbers.generateSortedSet(2, 12);
    }

    @Override
    public String toString() {
        return "5aus50: " + Arrays.toString(fiveOutOfFifty) + "\n2aus12: " + Arrays.toString(twoOutOfTwelve);
    }

}
