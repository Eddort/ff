import React from 'react';
import styles from './styles.css';

function Content() {
    const {label} = this.props;
    return (
        <div className="widget button">
            <span>{label}</span>
        </div>
    )
}
export default Content;
