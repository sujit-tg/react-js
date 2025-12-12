import React from 'react'
import Totalscore from './Totalscore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components'
import RollDice from './RollDice';
import { useState } from 'react';
import { Button } from '../styled/Button.js';
import { OutlineButton } from '../styled/Button.js';
import Rules from './rules.jsx';
const GamePlay = () => {
    const [score, setScore]= useState(0);
    const [error, setError]= useState("");
    const [showRules, setShowRules]= useState(false);
    const [selectedNumber, setSelectedNumber] =useState();
    const [currentDice, setCurrentDice] = useState(1);

    
    const generateRandonNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const HandleRollDice=() => {
        const randomNumber = generateRandonNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if(!selectedNumber) 
            {
                setError("you have not selected any number");
                return;
            }
            setError("");

        if (selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber);
        }else{
            setScore((prev) => prev - 2);
        }
        
        setSelectedNumber(undefined)
    }

    const resetScore = () =>{
        setScore(0);
    }
return (
    <MainContainer>
        <div className="top_section">
        <Totalscore score={score}/>
        <NumberSelector  error={error} setError={setError}selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <RollDice  currentDice={currentDice} handleRollDice={HandleRollDice}/>
    <div className="btns">
        <OutlineButton
        onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={()=> setShowRules((prev)=> !prev)}>
            {showRules ? "Hide " : "Show"} Rules</Button>
    </div>
    {showRules &&<Rules/>}
    </MainContainer>
);
};

export default GamePlay;

const MainContainer = styled.main`
padding-top: 50px;

.top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 220px;
    gap: 10px;
    margin-top: 30px;
}
`;

