import { Component, JSX } from 'solid-js'

interface Props extends Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}

const Btn: Component<Props> = (props) => {
    return (
        <button 
            class="cui-px-4 cui-py-2 cui-rounded-md cui-text-sm cui-font-medium cui-border-0 cui-focus:outline-none cui-focus:ring cui-transition cui-text-gray-600 cui-bg-gray-50 cui-hover:text-gray-800 cui-hover:bg-gray-100 cui-active:bg-gray-200 cui-focus:ring-gray-300 cui-disabled:opacity-50"
            { ...props }
        >
            { props.children }
        </button>
    )
}

export default Btn
