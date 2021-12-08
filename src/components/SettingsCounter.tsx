import React, {ChangeEvent, useState} from 'react'
import styled from "styled-components";
import {Paper} from "@mui/material";

const Container = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 18px;
  
`

const ButtonArea = styled.div`
  display: flex;
  width: 400px;
  height: 100px;
  align-items: center;
  justify-content: space-around;
`

type PropsType = {
    setCount: (value: number) => void
    maxValue: number
    newMax: (newMaxValue: number)=> void
    newStartValue: (newStartValue: number)=>void

}


export const SettingsCounter = ({newStartValue, maxValue, newMax}: PropsType) => {
    //local state for start-value (state for max-value based on App.tsx
    const [startValue, setStartValue] = useState(0)

//handler for change start-value
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        setStartValue(+newValue)
    }
//button set
    const setChangeHandler = () => {
        newStartValue(startValue)
    }
//handler for change maximum-value
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.currentTarget.value
        newMax(+newMaxValue)
    }


//UI
    return (
        <div>
            <Paper elevation={12}>
                <Container>
                    <div>
                        Start Value:
                        <input onChange={onChangeValueHandler} type={"number"} value={startValue}/>
                    </div>
                    <div>
                        Max Value:
                        <input onChange={onChangeMaxValueHandler} type={"number"} value={maxValue}/>
                    </div>
                </Container>
                <Paper elevation={8}>
                    <ButtonArea>
                        <button onClick={setChangeHandler}>set</button>
                    </ButtonArea>
                </Paper>
            </Paper>
        </div>
    )

}