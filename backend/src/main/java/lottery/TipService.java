package lottery;

public class TipService {

    public TipService() {

    }

    public TipOfLotto createTipOfLotto(int numberOfFields) {
        return new TipOfLotto(numberOfFields);
    }

    public TipOfEurojackpot[] createTipOfEurojackpot(int numberOfFields) {

        TipOfEurojackpot[] tip = new TipOfEurojackpot[numberOfFields];
        for (int i = 0; i < numberOfFields; i++) {
            tip[i] = new TipOfEurojackpot();
        }

        return tip;
    }

}