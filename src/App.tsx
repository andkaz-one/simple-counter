import React, {useState} from 'react';
import './App.css';
import {Grid, Paper} from "@mui/material";
import {Counter} from "./components/Counter";

function App() {
    let [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    }
    const resetCounter = () => {
        setCount(0)
    }


    return (
        <div className="App">
                <Counter value={count} increment={incrementCounter} reset={resetCounter}/>
        </div>
    );
}





export default App;
