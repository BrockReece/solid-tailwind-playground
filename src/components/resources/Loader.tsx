import { Component, ResourceReturn } from 'solid-js';

interface Props {
    resource: ResourceReturn<unknown>
}

const ResourceLoader: Component<Props> = (props) => {
    return (
        <>    
            { props.resource[0].loading ? (<div>Loading...</div>) : props.children }
        </>
    )
}

export default ResourceLoader;