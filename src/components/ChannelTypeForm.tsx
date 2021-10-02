import { Component, onMount } from 'solid-js'
import { createForm } from '@felte/solid'

import Btn from './Btn'
import { ChannelType, channelTypeResource } from '../store/channelTypes'

interface Props {
    afterSubmit: () => void
    channelType: ChannelType
}

const ChannelTypeForm: Component<Props> = (props) => {    
    let nameInput: HTMLInputElement
    const { form, errors, isValid, isSubmitting } = createForm<ChannelType>({
        async onSubmit(values) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    channelTypeResource[1].mutate((prev) => {
                        const results = prev.results.map((r) => {
                            if (r.id === values.id) {
                                const keys = Object.keys(props.channelType)
                                keys.forEach((key) => {
                                    r[key] = values[key]
                                })
                            }
                            return r
                        })
                        
                        return {
                            ...prev,
                            results
                        }
                    })
                    resolve({})
                }, 3000)
            })
            props.afterSubmit?.()
        },
        
        initialValues: props.channelType,

        validate(values) {
            const errors: Partial<ChannelType> = {}
            if (!values.name) errors.name = 'Name is required'
            if (!values.slug) errors.slug = 'Slug is required'

            return errors
        }
    })

    onMount(() => {
        nameInput.focus()
    })

    return (
        <form use:form class="grid grid-cols-1 gap-6">
            <label class="block">
                <span class="text-gray-700">Name</span>
                <input ref={nameInput} name="name" type="text" class="rounded mt-1 block w-full" />
                <span class="text-red-300">{ errors.name || (<span>&nbsp;</span>) }</span>
            </label>

            <label class="block">
                <span class="text-gray-700" >Slug</span>
                <input name="slug" type="text" class="rounded mt-1 block w-full" />
                <span class="text-red-300">{ errors.slug || (<span>&nbsp;</span>) }</span>
            </label>

            <Btn type="submit" disabled={ !isValid() || isSubmitting() }>Save</Btn>
        </form>
    )
}

export default ChannelTypeForm
