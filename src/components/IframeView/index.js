import React, { Component } from 'react'
import './styles.css'

class IframeView extends Component {
    constructor() {
        super()
    }
    
    render() {
        const {
            src
        } = this.props
        return (
            <iframe
                className="iframe-view"
                src={ src }
            />
        )
    }
}

export default IframeView