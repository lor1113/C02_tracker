import React from "react";
import {useNavigate} from 'react-router-dom';

function Button() {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate("/")}>Retake questionnaire</button>
    )
}

export default Button;