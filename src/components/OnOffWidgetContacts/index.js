import React, { Component } from 'react';
import styles from './styles.css';

class OnOffWidgetContacts extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {label} = this.props;
    return (
        <div className="widget">
            <span>{label} </span>
        </div>
        )
    }
}
export default OnOffWidgetContacts;
