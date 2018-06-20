import React, { Component } from 'react';
import styles from './styles.css';

class Grid extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        return (
            <div className="grid">
                {this.props.children}
            </div>
        )
    }
}
export default Grid
