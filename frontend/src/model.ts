export interface TipsOfLotto {
    mainNumbers: number[][];
    bonusNumber: number;
}

export interface TipsOfEurojackpotDTO {
    tips: Array<TipOfEurojackpot>
}

export interface TipOfEurojackpot {
    fiveOutOfFifty: number[];
    twoOutOfTwelve: number[];
}