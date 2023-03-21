import React from "react";
import { useState } from "react";
export default function Count() {
    const [count, setCout] = useState(0);
    const handleIncrement = () => {
        setCout((prevCount) => prevCount + 1);
    };
    const handleDecrement = () => {
        setCout((prevCount) => prevCount - 1);
    };

    const handleReset = () => {
        setCout(0);
    };
    return (
        <div className="App">
            <h1 className="title">Counter App(Basic)</h1>
            <div className={'card-content'}>
                <h1>Count : {count}</h1>
                <div className="buttons">
                    <button
                        className={(count === 5 ? 'disabled' : 'buttons-desing')}
                        disabled={count === 5 ? true : false}
                        onClick={handleIncrement}

                    >
                        +
                    </button>
                    <button
                        className={(count === -5 ? 'disabled' : 'buttons-desing')}
                        onClick={handleDecrement}
                        disabled={count === -5 ? true : false}
                    >
                        {" "}
                        -{" "}
                    </button>
                    <button className="buttons-desing" onClick={handleReset}>
                        0
                    </button>
                </div>
            </div>
        </div >
    );
}
