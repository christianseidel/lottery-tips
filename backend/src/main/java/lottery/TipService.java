package lottery;

public class TipService {

    public TipService() {

    }

    public TipOfLotto createTipOfLotto(int numberOfFields) {
        return new TipOfLotto(numberOfFields);
    }

}