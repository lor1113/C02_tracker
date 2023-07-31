import React from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

const StyledButton = styled.button`
    font-size: 1em;
    padding: 0.7em;
    border: none;
    background-color: rgb(84, 79, 197);
    color: white;
    font-weight: bold;
    &:hover {
        background-color: lightgreen;
        color: black;
    }
`

function Button() {
    const navigate = useNavigate()
    return (
        <StyledButton onClick={() => navigate("/")}>Retake questionnaire</StyledButton>
    )
}

export default Button;