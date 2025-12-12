import React from 'react'
import styled from 'styled-components';
const Rules = () => {
return (
    <Rulescontainer>
        <h2> Rules of the Dice Game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>

        </div>
    </Rulescontainer>
)
}

export default Rules;
const Rulescontainer = styled.div`
background-color: #fbf1f1;
max-width: 800px;

border-radius: 10px;
margin: 20px auto;
padding: 20px;
h2{
    font-size: 24px;

}
.text{
    margin-top: 20px;
}
`;