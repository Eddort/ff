import React, { Component } from 'react';
import styles from './styles.css';

class Content extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        )
    }
}
export default Content;
