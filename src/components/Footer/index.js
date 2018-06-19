import React, { Component } from 'react';
import styles from './styles.css';

class Footer extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        return (
            <div className="footer">
                {this.props.children}
            </div>
        )
    }
}
export default Footer;
