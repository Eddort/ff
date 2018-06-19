import React, { Component } from 'react';
import styles from './styles.css';

class Label extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
    return (
        <span className="label">
                {label}
        </span>
        )
    }
}
export default Label;
