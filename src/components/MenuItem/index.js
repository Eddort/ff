import React, { Component } from 'react';
import styles from './styles.css';

class MenuItem extends Component {
    constructor() {
		super();
		this.state = {};
    }

    render() {
        const {label} = this.props;
    return (
        <div className="widget">
            {label}
        </div>
        )
    }
}
export default MenuItem;
