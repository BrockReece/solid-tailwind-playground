import { Component, JSX, ResourceReturn } from 'solid-js';

interface Props {
    resource: ResourceReturn<unknown>
    fallback?: JSX.Element
}

function errorCodeFactory(code: number) {
    switch(code) {
        case 404:
            return 'This doesn`t exist'
        default:
            return 'Something went wrong'
    }
    
}

const ResourceError: Component<Props> = (props) => {
    return (
        <>    
            { props.resource[0].error ? props.fallback || (<div>{ errorCodeFactory(props.resource[0].error.code) }</div>) : props.children }
        </>
    )
}

export default ResourceError;