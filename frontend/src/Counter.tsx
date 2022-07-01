import {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <br />
            <div></div>
            <p>{count}</p>

            <button
                onClick={ () => setCount(count + 1)}
            >klick mich!
            </button>
        </div>
    )
}

export default Counter
