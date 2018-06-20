import React, { Component } from 'react';
import styles from './styles.css';
import Label from '../Label'

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
        <div>
        <div className="adaptiveGrid">
            <Label label='xs-'>{xs}</Label>
            <Label label='sm-'>{sm}</Label>
            <Label label='md-'>{md}</Label>
        </div>
        {this.props.children}
        </div>
        )
    }
}
export default AdaptiveGridField;
