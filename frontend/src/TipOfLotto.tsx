import React, {FormEvent, useState} from "react";
import {TipsOfLotto} from "./model";

function TipOfLotto() {

    const [numberOfTips, setNumberOfTips] = useState('eins')
    const [tipsOfLotto, setTipsOfLotto] = useState({} as TipsOfLotto)

    let fields = 0;

    const getTipOfLotto = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_BASE_URL}/api/lotto/${numberOfTips}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numberOfFields: fields,
            })
        }).then(response => response.json())
            .then((responseBody: TipsOfLotto) => setTipsOfLotto(responseBody));
    };

       return (
        <div>
            <p>Lotto: Bitte geben Sie die Anzahl der gewünschten Lottofelder ein:</p>

            <form onSubmit={ev => getTipOfLotto(ev)}>
                <input type="number" placeholder="enter a number" value={numberOfTips} autoFocus required
                       onChange={ev => setNumberOfTips(ev.target.value)}/>
                <p><button type="submit"> &#10004; abschicken</button></p>
            </form>

            <p>{(tipsOfLotto.mainNumbers != null)
                ? (tipsOfLotto.mainNumbers.map(setOfNumbers => <p>Zahlen: {setOfNumbers.map(singleNumber => <span>{singleNumber}{(singleNumber===setOfNumbers[5]) ? "" : ","} </span>) }</p>))
                : <span> Anzahl Lottofelder = 0 </span> }</p>

            <p>{(tipsOfLotto.bonusNumber != null)
                ? <span> Zusatzzahl: {tipsOfLotto.bonusNumber}</span>
                : <span></span> }</p>
        </div>
    );
}

export default TipOfLotto;
