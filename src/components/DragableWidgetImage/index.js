import React, { Component } from 'react';
import styles from './styles.css';


class DragableWidgetImage extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
    return (
        <span className="button">{label}</span>
        )
    }
}
export default DragableWidgetImage;
