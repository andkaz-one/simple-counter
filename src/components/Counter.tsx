import {Button, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import BlockIcon from '@mui/icons-material/Block';
import ReplayIcon from '@mui/icons-material/Replay';
import React, {useState} from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 150px;
`

const ButtonArea = styled.div`
  display: flex;
  width: 400px;
  height: 100px;
  align-items: center;
  justify-content: space-around;
`


type PropsType = {
    value: number
    increment: () => void
    reset: () => void
    maxValue: number
}


export const Counter = ({value, increment, reset, ...props}: PropsType) => {

    return (
        <div>
            <Paper elevation={12}>
                <Container>
                    {value}
                </Container>
                <Paper elevation={8}>
                    <ButtonArea>
                        {
                            value === props.maxValue
                                ? <Button variant="outlined" disabled onClick={increment}><BlockIcon/></Button>
                                : <Button variant="outlined" onClick={increment}><AddIcon/></Button>

                        }
                        {
                            value === 0
                                ? <Button variant="outlined" disabled onClick={reset}><ReplayIcon/></Button>
                                : <Button variant="outlined" onClick={reset}><ReplayIcon/></Button>
                        }
                    </ButtonArea>

                </Paper>
            </Paper>
        </div>
    )
}


const SettingsCounter = () => {

    return (
        <div>
            <input type={'number'}/>
            <button>save</button>
        </div>
    )
}