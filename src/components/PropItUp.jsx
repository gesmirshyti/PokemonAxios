import React from "react";
import { useState } from "react";

const PropItUp = (props) =>{
    const {firstName, lastName, initialAge,hairColor} = props;
    const [age,setAge] = useState(initialAge);
    const increaseAge = () => {
        setAge(age + 1);
    };
    return(
        <>
        <h1>{lastName},{firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color : {hairColor}</p>
        <button onClick={increaseAge} >Click me</button>
        </>
    
    )
}

export default PropItUp