import React, { Component } from 'react';
import styles from './styles.css';
import Label from '../Label'

class OnOffLabel extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
    return (
        <div className="onofflabel">
            <Label label={label}/>
            <button className="switcher">on</button>
        </div>
        )
    }
}
export default OnOffLabel;
