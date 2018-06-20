import React, { Component } from 'react';
import styles from './styles.css';
import Label from '../Label'

class WidgetMenu extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
    return (
        <div className="iconWidget">
            <Label label={label}/>
            {this.props.children}
        </div>
        )
    }
}
export default WidgetMenu;
