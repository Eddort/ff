import React, { Component } from 'react';
import styles from './styles.css';

class NumberField extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
    return (
        <span className="field">{label}</span>
        )
    }
}
export default NumberField;
