import React from 'react';
import styles from './Input.module.css'; 

const Input = (props) =>{
    const{
        children,
        Required = null,
    } = props

    let label = null
    if(children){
        label = (
            <React.Fragment>
                {children}:<br/>
            </React.Fragment>
            )
    }
    return(
        <div>
            {label}
            <input />
        </div>
    )
}
export default Input;