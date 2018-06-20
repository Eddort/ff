import React, { Component } from 'react';
import styles from './styles.css';
import Label from '../Label'


class DragableWidgetImage extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
    return (
        <Label label={label}/>
        )
    }
}
export default DragableWidgetImage;
