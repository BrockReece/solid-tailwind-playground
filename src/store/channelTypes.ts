import { createResource, createMemo } from 'solid-js'
import { createStore } from "solid-js/store"
import { BASE_PAGINATION_LIMIT, PLATFORM_API_BASE, DjangoList } from './platformAPIBase'

export interface ChannelType {
    id: string
    name: string
    slug: string
}

export const [ filters, setFilters ] = createStore({
    search: '',
    limit: BASE_PAGINATION_LIMIT
})

const autoRefreshParams = createMemo(() => ({
    search: filters.search,
    limit: filters.limit
}))

export const channelTypeResource = createResource<DjangoList<ChannelType>, typeof autoRefreshParams>(autoRefreshParams, (_) => {
    const params = new URLSearchParams({
        ...(filters as Record<string, any>)
    })
    
    return fetch(`${PLATFORM_API_BASE}/channel-types?${params}`)
        .then(response => response.json())
})
