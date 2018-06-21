import React, { Component } from 'react'
import SplitPane from 'react-split-pane'
import './styles.css'
class SplitView extends Component {
    constructor() {
        super()
    }
    
    render() {
        const {
            children,
            split
        } = this.props
        
        return (
            <SplitPane
                split={split}
                minSize={300}
                maxSize={-300}
                // split="horizontal"
                defaultSize="50%"
            >
               {children}
            </SplitPane>
        )
    }
}

export default SplitView