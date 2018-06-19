import React, { Component } from 'react';
import styles from './styles.css';

class AdaptiveGridField extends Component {
    constructor() {
		super();
		this.state = {};
    }
    render() {
        const {xs} = this.props;
        const {sm} = this.props;
        const {md} = this.props;
    return (
        <div className="adaptiveGrid">
            <span className="key">xs-{xs}
            </span>
            <span className="key">sm-{sm}
            </span>
            <span className="key">md-{md}
            </span>
            {this.props.children}
        </div>
        )
    }
}
export default AdaptiveGridField;
