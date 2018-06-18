import React from 'react';
import styles from './styles.css';

function Label(props) {
    const {label} = props
    return (
        <span 
            className="label">
                {label}
        </span>

    )
}
export default Label
