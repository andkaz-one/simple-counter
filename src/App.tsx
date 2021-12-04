import React, {useEffect, useState} from 'react';
import './App.css';
import {Grid, Paper} from "@mui/material";
import {Counter} from "./components/Counter";
import {SettingsCounter} from "./components/SettingsCounter";

function App() {
    let [count, setCount] = useState(0)



    useEffect(() => {
        let countFromLocalStorage = localStorage.getItem('counter_value')
        if (countFromLocalStorage) {
            setCount(JSON.parse(countFromLocalStorage))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('counter_value', JSON.stringify(count))
    }, [count])


    const incrementCounter = () => {
        setCount(count + 1)
    }
    const resetCounter = () => {
        setCount(0)
    }


    return (
        <div className="App">
            <SettingsCounter setCount={setCount} />
            <Counter value={count} increment={incrementCounter} reset={resetCounter}/>
        </div>
    );
}


export default App;
