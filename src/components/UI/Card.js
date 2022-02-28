import React from "react";
import styles from './Card.module.css'

const Card = (props) =>
{
    // Using this to inherit the input css properties from the Userinput.js, just have to make sure the className is correct in UserInput.js
        //const inheritCssClasses = styles.card + props.className;

    return(
    <div className={`${styles.card} ${props.className}`}>
        {props.children}
    </div>
    )
    
}

export default Card;