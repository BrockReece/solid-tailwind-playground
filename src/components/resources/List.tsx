import { JSX, ResourceReturn, For, Show } from 'solid-js'
import { DjangoList } from '../../store/platformAPIBase'

import Btn from '../Btn'
import Error from './Error'
import Loader from './Loader'

interface Props<T = {}> {
    resource: ResourceReturn<DjangoList<T>>
    children: (item: T) => JSX.Element
    fallback?: JSX.Element
    noItems?: JSX.Element
}

function ResourceList<T> (props: Props<T>) {
    return (
        <div>
            <div class="cui-flex cui-gap-4">
                <div class="cui-flex-grow cui-px-2">
                    <Show when={ props.resource[0]()?.count > 0 }>
                        <div class="cui-text-sm">
                            Showing { props.resource[0]().results.length } records out of { props.resource[0]()?.count }
                        </div>
                    </Show>
                </div>
                <Btn onClick={ props.resource[1].refetch }>Refresh</Btn>
                
            </div>
            
            
            <Error resource={ props.resource } fallback={ props.fallback }>
                <Loader resource={ props.resource }>
                    <For each={ props.resource[0]().results } fallback={ props.noItems || ( <div>No Items</div> ) }>
                        { (item) => (
                            <div class="cui-p-3 cui-border-b-2">
                                { props.children(item) }
                            </div>
                        )}
                    </For>
                </Loader>
            </Error>
        </div>
    )
}

export default ResourceList
