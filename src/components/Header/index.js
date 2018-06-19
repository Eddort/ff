import React, { Component } from 'react';
import styles from './styles.css';

class Header extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        return (
            <div className="header">
                {this.props.children}
            </div>
        )
    }
}   
export default Header;
