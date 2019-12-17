import React from 'react';
import styles from './Button.module.css'; 

const Button = (props) =>{
    const {
        defaultStyled = true,
        onClick = null,
        style = null,
        children = "Button",
        disabled = null,
        type = "primary",
        size = "default",
    } = props
    const componentClass = [styles[type.toLowerCase()], styles[size.toLowerCase()]].join(' ');
    console.log(componentClass);
    return(
        <button 
        onClick={onClick} 
        className={defaultStyled ? componentClass : null}
        style={{...style}}
        disabled={disabled}>
            {children}
        </button>
    )
}
export default Button