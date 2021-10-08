import { Component, ResourceReturn } from 'solid-js';

interface Props {
    resource: ResourceReturn<unknown>
}

const ResourceLoader: Component<Props> = (props) => {
    return (
        <>    
            { props.resource[0].loading ? (
                <div class="cui-flex cui-justify-center cui-items-center">
                    <div class="cui-animate-spin cui-rounded-full cui-h-32 cui-w-32 cui-border-b-2 cui-border-gray-900"></div>
                </div>
            ) : props.children }
        </>
    )
}

export default ResourceLoader;