import React, { Component } from 'react';
import styles from './styles.css';

class DragableWidgetButton extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
    return (
        <div className="widget button">
            <span>{label}</span>
        </div>
        )
    }
}
export default DragableWidgetButton;
