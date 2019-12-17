import React from 'react';
import styles from './Card.module.css';

const card = (props) => {
    const {
        onClick = null,
        clickable = false,
        style = null,
        children = "card",
        type = "primary",
        size = "default",
        transparent = false
    } = props;
    const componentClass = [styles.div, styles[type.toLowerCase()], styles[size.toLowerCase()]].join(' ');

    return(
        <div
            onClick={clickable ? onClick : null}
            className={componentClass}
            style={style}
        >
            {children}
        </div>
    )
}
export default card;