import { Show, For, JSX, Accessor, ResourceReturn } from "solid-js"
import { useLoadMore, DjangoList } from '../../store/platformAPIBase'

import ResourceList from "./List"
import Btn from '../Btn'

interface Props<T = {}> {
    resource: ResourceReturn<DjangoList<T>>
    children: (item: T) => JSX.Element
    limit?: Accessor<number> | number
    skeleton?: () => JSX.Element
    fallback?: JSX.Element
    noItems?: JSX.Element
}

function LoadMoreList<T> (props: Props<T>) {
    const [
        { isLoadingMore, nextPageSize },
        { loadMore }
    ] = useLoadMore(props.resource, props.limit)

    return (
        <>
            <ResourceList
                resource={ props.resource }
                fallback={ props.fallback }
                noItems={ props.noItems }
            >
                { props.children }                        
            </ResourceList>
            
            <Show when={ isLoadingMore() && props.skeleton }>
                <div class="animate-pulse">
                    <For each={ Array.from(Array(nextPageSize())) }>
                        {() => (
                            <div class="p-3 border-b-2">
                                { props.skeleton() }
                            </div>
                        )}
                        
                    </For>
                </div>
            </Show>

            <Show when={ props.resource[0]()?.next }>
                <div class="pt-2 text-center">
                    <Btn onClick={ loadMore }>Load More</Btn>
                </div>
            </Show>
        </>
    )
}

export default LoadMoreList
