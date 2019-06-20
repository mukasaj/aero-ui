import React from 'react';
import styles from './Button.module.css'; 

const Button = (props) =>{
    const {
        onClick = null,
        style = null,
        children = "Button",
        type = "primary",
        size = "default",
    } = props
    const componentClass = [styles.btn, styles[type], styles[size]].join(' ');

    return(
        <button 
        onClick={onClick} 
        className={componentClass}
        style={{...style}}>
            {children}
        </button>
    )
}
export default Button