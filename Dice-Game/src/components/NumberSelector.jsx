import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {

    const arrNumber=[1,2,3,4,5,6];
    const numberselectorHandler =(value)=>{
        setSelectedNumber(value);
        setError("");
    };
return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
    <div className='flex'>
        {arrNumber.map((value, i) => (
            <Box 
            isSelected={value === selectedNumber}
            key={i} 
            onClick={()=>numberselectorHandler(value)}>
            {value}
            </Box>
        ))}
    </div>
    <p> Select Number</p>
    </NumberSelectorContainer>
)
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;

.flex{
    display: flex;
    gap:24px;
    
}

p{
    font-size: 24px;
    font-weight: 500;
    padding-top: 10px;
    padding-left: 250px;
}

.error{
    color: red;
    padding-right: 90px;
    font-size: 16px;
    margin-bottom: 10px;
}
`;

const Box = styled.div`
height: 52px;
width: 52px;
border-radius: 5px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 600;
color: ${(props)=> props.isSelected ? 'white' : 'black'};
background-color: ${(props)=> props.isSelected ? 'black' : 'white'};
`;