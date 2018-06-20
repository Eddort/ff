import React, { Component } from 'react';
import styles from './styles.css';
import Label from '../Label'

class EmailField extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
        const {placeholder} = this.props;
        const {value} = this.props;
    return (
        <form className="form">
            <Label label={label}/>
            <input className="input" type="text" placeholder={placeholder} value={value}/>
        </form>
        )
    }
}
export default EmailField;