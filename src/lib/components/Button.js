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
                color: 'white',
                backgroundColor: "#2AABF1",
                border: "none",
                fontSize: '15px',
                borderRadius: '5px',
                textAlign: 'center',
            }
            break;
        case "danger":
                componentStyle={
                    color: '#F12D2A',
                    backgroundColor: "#F0EDED",
                    border: "none",
                    borderRadius: '5px',
                    textAlign: 'center',
                }
                break;    
        default: break;
    }
    switch (size) {
        case "default":
            sizeStyle={
                width: 'auto',
                height: '30px',
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