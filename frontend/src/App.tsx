import React, {useState, useEffect, FormEvent} from 'react';
import {TipsOfLotto} from "./model";

function App() {

    const [greeting, setGreeting] = useState('geht')
    const [numberOfTips, setNumberOfTips] = useState('eins')
    const [tipsOfLotto, setTipsOfLotto] = useState({} as TipsOfLotto)

    useEffect(() => {
        fetch('/api/es', {
            method: 'GET',
            headers: {
                'Accept': 'text/plain'
            }
        })
            .then(response => response.text())
            .then(text => setGreeting(text))
            .catch(err => setGreeting('Da ist etwas schief gelaufen'));
    }, []);

    let fields = 3

    const getTipOfLotto = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_BASE_URL}/api/tips/${fields}`, {
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
            {greeting}
            <p>Nas!</p>!
            <strong>Na!</strong>
            <h1>{tipsOfLotto}</h1>

            <form onSubmit={ev => getTipOfLotto(ev)}>
                <input type="number" placeholder="enter a number" value={numberOfTips} autoFocus required
                       onChange={ev => setNumberOfTips(ev.target.value)}/>
                <button type="submit"> &#10004; abschicken</button>
            </form>

        </div>
    );
}

export default App;
