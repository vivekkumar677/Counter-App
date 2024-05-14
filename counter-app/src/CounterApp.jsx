import React, { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
        <h1>CounterApp</h1>
        <p>Count: {count}</p>
        <button onClick={Increment} >Increment</button>
        <button onClick={Decrement}>Decrement</button>
        </div>
    );
};

export default CounterApp;
