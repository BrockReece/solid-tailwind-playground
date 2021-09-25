export const PLATFORM_API_BASE = '/api'

export interface DjangoList<T> {
    count: number
    next: string | null
    previous: string | null 
    results: T[]
}
