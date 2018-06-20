import React, { Component } from 'react';
import styles from './styles.css';
import Label from '../Label'

class IconWidget extends Component {
    constructor() {
		super();
		this.state = {};
    }

    render() {
        const {label} = this.props;
        const {value} = this.props;
        const {placeholder} = this.props;
        const {src} = this.props;
    return (
        <div className="iconWidget">
            <Label label={label}/>
            <img className="img" src={src}/>
        </div>
        )
    }
}
export default IconWidget;
