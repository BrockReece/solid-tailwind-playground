import { createSignal, createMemo, ResourceReturn, Accessor } from "solid-js" 
export const PLATFORM_API_BASE = '/api'

export const BASE_PAGINATION_LIMIT = 10

export interface DjangoList<T> {
    count: number
    next: string | null
    previous: string | null 
    results: T[]
}


export function useLoadMore<T>(resource: ResourceReturn<DjangoList<T>>, limit: Accessor<number> | number  = BASE_PAGINATION_LIMIT) {
    const [ isLoadingMore, setIsLoadingMore ] = createSignal(false)

    return [
        {
            isLoadingMore,
            nextPageSize: createMemo(() => {
                return Math.min(resource[0]()?.count - resource[0]()?.results.length, typeof limit === 'function' ? limit() : limit)
            })
        },
        {
            loadMore() {
                setIsLoadingMore(true)
                const nextURL = new URL(resource[0]().next)
                return fetch(`${PLATFORM_API_BASE}/${nextURL.pathname}${nextURL.search}`)
                    .then(res => res.json())
                    .then((res) => {
                        resource[1].mutate((prev) => {
                            res.results = [
                                ...prev.results,
                                ...res.results
                            ]
                            return res
                        })
                    })
                    .finally(() => {
                        setIsLoadingMore(false)
                    })
            }
        }
    ]
}