import React, { Component } from 'react'
import SplitPane from 'react-split-pane'
import './styles.css'
class SplitView extends Component {
    constructor() {
        super()
    }
    
    render() {
        const {
            children
        } = this.props
        
        return (
            <SplitPane
                split="vertical"
                defaultSize="50%"
            >
               {children}
            </SplitPane>
        )
    }
}

export default SplitView