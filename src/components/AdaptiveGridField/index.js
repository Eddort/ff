import React from 'react';
import styles from './styles.css';

function AdaptiveGridField() {
    const {xs} = this.props;
    const {sm} = this.props;
    const {md} = this.props;
    return (
        <div>
            <span className="key">xs-{xs}
            </span>
            <span className="key">sm-{sm}
            </span>
            <span className="key">md-{md}
            </span>
        </div>
    )
}
export default AdaptiveGridField;
