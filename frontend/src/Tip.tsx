import React, {FormEvent, useState} from "react";
import {TipsOfLotto} from "./model";

function Tip() {

    const [numberOfTips, setNumberOfTips] = useState('eins')
    const [tipsOfLotto, setTipsOfLotto] = useState({} as TipsOfLotto)


    let fields = 33
    const getTipOfLotto = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_BASE_URL}/api/tips/${numberOfTips}`, {
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
            <p>Bitte geben Sie die Anzahl der gewünschten Lottofelder ein:</p>

            <form onSubmit={ev => getTipOfLotto(ev)}>
                <input type="number" placeholder="enter a number" value={numberOfTips} autoFocus required
                       onChange={ev => setNumberOfTips(ev.target.value)}/>
                <p><button type="submit"> &#10004; abschicken</button></p>
            </form>

            <p>{tipsOfLotto.mainNumbers}</p>
            <p>{tipsOfLotto.bonusNumber}</p>

        </div>
    );
}

export default Tip;
