import React, { Component } from 'react';
import styles from './styles.css';

class OnOffLabel extends Component {
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
export default OnOffLabel;
