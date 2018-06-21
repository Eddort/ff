import React from 'react'
import App from '../App'
import SplitView from '../SplitView'
import IframeView from '../IframeView'

export default () => {
    return (
        <SplitView>
            <App/>
            <IframeView src="http://frv2fhg22.ukit.me/"/>
        </SplitView>
        
    )
}