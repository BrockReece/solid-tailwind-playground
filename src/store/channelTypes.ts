import { createResource, createSignal, createMemo } from 'solid-js'
import { PLATFORM_API_BASE, DjangoList } from './platformAPIBase'

export interface ChannelType {
    id: string
    name: string
    slug: string
}

export const [ search, setSearch ] = createSignal('')

const autoRefreshParams = createMemo(() => ({
    search: search()
}))

export const channelTypeResource = createResource<DjangoList<ChannelType>, typeof autoRefreshParams>(autoRefreshParams, (autoRefreshParams) => {
    const params = new URLSearchParams({
        ...autoRefreshParams
    })
    
    return fetch(`${PLATFORM_API_BASE}/channel-types?${params}`)
        .then(response => response.json())
})

export function loadMoreChannelTypes() {
    const nextURL = new URL(channelTypeResource[0]().next)
    return fetch(`${PLATFORM_API_BASE}/${nextURL.pathname}${nextURL.search}`)
        .then(res => res.json())
        .then((res) => {
            channelTypeResource[1].mutate((prev) => {
                res.results = [
                    ...prev.results,
                    ...res.results
                ]
                return res
            })
        })
}
