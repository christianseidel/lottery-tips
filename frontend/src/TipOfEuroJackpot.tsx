import React, {FormEvent, useState} from "react";
import {TipsOfEurojackpotDTO, TipOfEurojackpot} from "./model";

function TipOfEuroJackpot() {

    const [numberOfTips, setNumberOfTips] = useState('eins')
    const [tipsOfEurojackpot, setTipsOfEurojackpot] = useState({} as TipsOfEurojackpotDTO)

    let fields = 0;

    const getTipOfEurojackpot = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_BASE_URL}/api/eurojackpot/${numberOfTips}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numberOfFields: fields,
            })
        }).then(response => response.json())
            .then((responseBody: TipsOfEurojackpotDTO) => setTipsOfEurojackpot(responseBody));
    };

    return (
        <div>
            <p>Eurojackpot: Bitte geben Sie die Anzahl der gewünschten Lottofelder ein:</p>

            <form onSubmit={ev => getTipOfEurojackpot(ev)}>
                <input type="number" placeholder="enter a number" value={numberOfTips} autoFocus required
                       onChange={ev => setNumberOfTips(ev.target.value)}/>
                <p><button type="submit"> &#10004; abschicken</button></p>
            </form>




            <p>{(tipsOfEurojackpot.tips == null)
                ? <span> nix da</span>
                : {tipsOfEurojackpot}}</p>

            <p>{(tipsOfEurojackpot.tips == null)
                ? <span> Zusatzzahl: </span>
                : <span>d</span> }</p>
        </div>
    );
}

export default TipOfEuroJackpot;
