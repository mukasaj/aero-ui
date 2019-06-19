import React from 'react';

const Button = (props) =>{
    const {
        onClick = null,
        children = "Button",
        type = "primary",
        size = "default"
    } = props
    let componentStyle;
    let sizeStyle;
    switch (type) {
        case "primary":
            componentStyle={
                color: 'red',
                borderRadius: '5px',
            }
            break;
        default: break;
    }
    switch (size) {
        case "default":
            sizeStyle={
                width: '100px',
                height: '35px',
            }
            break;
        default: break;
    }
    return(
        <button 
        onClick={onClick} 
        style={{...componentStyle, ...sizeStyle}}>
            {children}
        </button>
    )
}
export default Button