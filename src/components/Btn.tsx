import { Component } from 'solid-js'

interface Props {
    onClick: () => void
}

const Btn: Component<Props> = (props) => {
    return (
        <button 
            class="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-gray-600 bg-gray-50 hover:text-gray-800 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300"
            onClick={ props.onClick }
        >
            { props.children }
        </button>
    )
}

export default Btn
