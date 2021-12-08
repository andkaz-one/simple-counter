import React, {useEffect, useState} from 'react';
import './App.css';
import {Grid, Paper} from "@mui/material";
import {Counter} from "./components/Counter";
import {SettingsCounter} from "./components/SettingsCounter";

function App() {
    /*const [startValue, setStartValue] = useState(0)*/
    const [maxValue, setMaxValue] = useState(10)
    const [count, setCount] = useState(0)






 const newMax = (newValue: number) => {
        setMaxValue(newValue)
 }

 const newStartValue = (newStartValue: number) => {
        if(newStartValue <= maxValue) {
            setCount(newStartValue)
        }
 }



    useEffect(() => {
        let countFromLocalStorage = localStorage.getItem('counter_value')
        let maxSettingValueFromLocalStorage = localStorage.getItem('settings_MaxValue')
        if (countFromLocalStorage && maxSettingValueFromLocalStorage) {
            setCount(JSON.parse(countFromLocalStorage))
            setMaxValue(JSON.parse(maxSettingValueFromLocalStorage))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('counter_value', JSON.stringify(count))
        localStorage.setItem('settings_MaxValue', JSON.stringify(maxValue))
    }, [count, maxValue])


    const incrementCounter = () => {
        setCount(count + 1)
    }
    const resetCounter = () => {
        setCount(0)
    }


    return (
        <div className="App">
            <SettingsCounter setCount={setCount} newMax={newMax} maxValue={maxValue} newStartValue={newStartValue}/>
            <Counter value={count} increment={incrementCounter} reset={resetCounter} maxValue={maxValue}/>
        </div>
    );
}


export default App;
