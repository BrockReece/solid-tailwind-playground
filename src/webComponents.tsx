import { Component } from 'solid-js'
import { customElement } from "solid-element"

import ChannelTypeList from './views/ChannelTypes'

const WebComponentWrapper: Component = (props) => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://unpkg.com/@croud-ui/css/dist/main.min.css"
            />
            { props.children }
        </>
    )
}

customElement('channel-types', { limit: undefined }, ({ limit }) => (
    <WebComponentWrapper>
        <ChannelTypeList limit={limit} />
    </WebComponentWrapper>
))
