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
}


export const SettingsCounter = ({setCount}: PropsType) => {
    const [value, setValue] = useState('0')
    const [maxValue, setMaxValue] = useState('10')

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        setValue(newValue)

    }

    const setChangeHandler = () => {
        if (+value <= +maxValue) {
            setCount(+value)
        }

    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.currentTarget.value
        setMaxValue(newMaxValue)
    }



    return (
        <div>
            <Paper elevation={12}>
                <Container>

                    <div>
                        Start Value:
                        <input onChange={onChangeValueHandler} type={"number"} value={value}/>
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