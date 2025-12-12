import styled from 'styled-components';
import React from 'react'
import toggle from '../App.jsx'
import { Button } from '../styled/Button.js';
const StartGame = ({toggle}) => {
return (
    <Container>
        <div>
        <img src='./images/dice.png' alt='dice-image'/>
        </div>
        <div className='content'>
        <h1>Dice Game</h1>
        <Button
        onClick={toggle}
        >Play Now</Button>
        </div>
    </Container>
)
}

export default StartGame;

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;

height: 100vh;
align-items: center;
padding: 0 20px;

.content {
    h1 {
        font-size: 89px;
        white-space: nowrap;
    }

}
`;

