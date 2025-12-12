import React from 'react'
import styled from 'styled-components';
const Totalscore = ({score}) => {
return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score </p>
        </ScoreContainer>
    
)
}

export default Totalscore

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;

    h1{
        font-size: 70px;
        line-height: 70px;
    }
    p {
        font-size: 24px;
        font-weight: 400;
    }
`