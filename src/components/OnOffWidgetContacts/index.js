import React, { Component } from 'react';
import styles from './styles.css';
import Label from '../Label'

class OnOffWidgetContacts extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
    return (
        <div className="widget">
            <Label label={label}/>
        </div>
        )
    }
}
export default OnOffWidgetContacts;
