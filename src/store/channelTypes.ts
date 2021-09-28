import { createResource, createSignal, createMemo } from 'solid-js'
import { BASE_PAGINATION_LIMIT, PLATFORM_API_BASE, DjangoList } from './platformAPIBase'

export interface ChannelType {
    id: string
    name: string
    slug: string
}

export const [ search, setSearch ] = createSignal('')
export const limit = BASE_PAGINATION_LIMIT

const autoRefreshParams = createMemo(() => ({
    search: search(),
    limit
}))

export const channelTypeResource = createResource<DjangoList<ChannelType>, typeof autoRefreshParams>(autoRefreshParams, (autoRefreshParams) => {
    const params = new URLSearchParams({
        ...autoRefreshParams
    })
    
    return fetch(`${PLATFORM_API_BASE}/channel-types?${params}`)
        .then(response => response.json())
})
