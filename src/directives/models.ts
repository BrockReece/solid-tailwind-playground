import { createRenderEffect, Accessor } from 'solid-js'
import { Store, SetStoreFunction } from 'solid-js/store'

declare module "solid-js" {
    namespace JSX {
        interface Directives {
            model: any
            modelFromStore: string
        }
    }
}

function model<T>(el, value: [() => T, (v: T) => void]) {
    const [field, setField] = value
    createRenderEffect(() => (el.value = field()))
    el.addEventListener('input', (e) => setField(e.target.value))
}


export function createModel<T>(getter: Accessor<T>, setter: (v: T) => any) {
    return {
        model: (el) => model(el, [ getter, setter ])
    } 
}

export function createFormModelFromStore<T>(store: Store<T>, storeSetter: SetStoreFunction<T>) {
    return {
        modelFromStore: (el: HTMLInputElement, key: () => keyof T) => model(el, [ () => store[key()], (v) => storeSetter(key(), v) ])
    } 
}
