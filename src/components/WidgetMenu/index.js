import React, { Component } from 'react';
import styles from './styles.css';

class WidgetMenu extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
    return (
        <div className="widget">
            <span>{label}</span>
            {this.props.children}
        </div>
        )
    }
}
export default WidgetMenu;
