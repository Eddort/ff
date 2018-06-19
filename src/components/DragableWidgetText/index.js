import React, { Component } from 'react';
import styles from './styles.css';

class DragableWidgetText extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
        return (
            <div className="button">
                <span>{label}</span>
            </div>
            )
        }
}
export default DragableWidgetText;
