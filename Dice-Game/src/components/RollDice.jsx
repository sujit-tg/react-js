import React from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, handleRollDice}) => {
    
    
    
return (
    <DiceContainer>
        <div className='dice' onClick={handleRollDice}>
            <img src={`./images/dice_images/dice_${currentDice}.png`} alt='dice-1'/>
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
)
}

export default RollDice
const DiceContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
flex-direction: column;

    .dice{
        cursor: pointer;
    }
    p{
        font-size: 24px;
    }

    
`;