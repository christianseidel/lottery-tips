package lottery;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;


class TipServiceTest {

    @Test
    void shouldReturnOneTipOfLotto() {

        // given
        TipService service = new TipService();

        // when
        TipOfLotto oneTip = service.createTipOfLotto(1);

        // then: number of tips = 1
        Assertions.assertEquals(1, oneTip.mainNumbers.length);


    }@Test
    void shouldReturnFiveTipsOfLotto() {

        // given
        TipService service = new TipService();

        // when
        TipOfLotto fiveTips = service.createTipOfLotto(5);

        // then: number of tips = 5
        Assertions.assertEquals(5, fiveTips.mainNumbers.length);

        // then: sum of all numbers of all tips is greater than
        // or equal 105 and smaller than or equal 1,395
        int[] arrOfAllNumbers = Arrays.stream(fiveTips.mainNumbers).flatMapToInt(Arrays::stream).toArray();
        int sum = Arrays.stream(arrOfAllNumbers).sum();
        Assertions.assertTrue(sum >= (5 * 21)  && sum <= (5 * 279));

        // then: bonus number is in between 0 and 9
        Assertions.assertTrue(fiveTips.bonusNumber >= 0 && fiveTips.bonusNumber <= 9);
    }

}