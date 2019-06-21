import React from 'react';
import styles from './Button.module.css'; 

const Button = (props) =>{
    const {
        onClick = null,
        style = null,
        children = "Button",
        disabled = null,
        type = "primary",
        size = "default",
    } = props
    const componentClass = [styles[type], styles[size]].join(' ');

    return(
        <button 
        onClick={onClick} 
        className={componentClass}
        style={{...style}}
        disabled={disabled}>
            {children}
        </button>
    )
}
export default Button