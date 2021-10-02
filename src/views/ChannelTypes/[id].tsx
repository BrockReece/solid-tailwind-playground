import { Component, Resource, Show } from 'solid-js'
import { useData, useNavigate } from 'solid-app-router'

import ChannelTypeForm from '../../components/ChannelTypeForm'
import { ChannelType } from '../../store/channelTypes'
import Sidebar from '../../components/Sidebar'
import Loader from '../../components/resources/Loader'

const EditSidebar: Component = () => {
    const navigate = useNavigate()
    const channelType = useData<Resource<ChannelType>>()

    function close () {
        navigate('/channel-types')
    }

    return (
        <Sidebar onClose={ close } title="Edit Channel Type">
            <Show when={!channelType.loading} fallback={(<Loader resource={[channelType, { mutate:() => {}, refetch: () => {} }]}/>)}>
                <ChannelTypeForm afterSubmit={ close } channelType={ channelType() }/>
            </Show>
        </Sidebar>
    )
}

export default EditSidebar