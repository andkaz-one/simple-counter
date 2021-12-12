import React, {ChangeEvent, useEffect, useState} from 'react'
import styled from "styled-components";
import {Button, Paper, TextField} from "@mui/material";

const Container = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;  
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


    useEffect(() => {
        let startValueFromLocalStorage = localStorage.getItem('start_value')
        if (startValueFromLocalStorage) {
            setStartValue(JSON.parse(startValueFromLocalStorage))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('start_value', JSON.stringify(startValue))
    }, [startValue])



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
                        <TextField
                            label="Start Value"
                            variant="outlined"
                            onChange={onChangeValueHandler}
                            type={"number"}
                            value={startValue}
                        />
                    </div>
                    <div>
                        <TextField
                            onChange={onChangeMaxValueHandler}
                            type={"number"}
                            value={maxValue}
                            label="Max Value"
                            variant="outlined"
                        />
                    </div>
                </Container>
                <Paper elevation={8}>
                    <ButtonArea>
                        <Button variant="outlined" onClick={setChangeHandler}>set</Button>
                    </ButtonArea>
                </Paper>
            </Paper>
        </div>
    )

}