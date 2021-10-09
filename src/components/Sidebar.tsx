import { Component } from "solid-js"

interface Props {
    title: string,
    onClose: () => void
}

const Sidebar: Component<Props> = (props) => (
    <div class="cui-fixed cui-inset-0 cui-overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <div class="cui-absolute cui-inset-0 cui-overflow-hidden">

            <div class="cui-absolute cui-inset-0 cui-bg-gray-500 cui-bg-opacity-75 cui-transition-opacity" aria-hidden="true"></div>
            <div class="cui-fixed cui-inset-y-0 cui-right-0 cui-pl-10 cui-max-w-full cui-flex">
            
                <div class="cui-relative cui-w-screen cui-max-w-md">
                
                    <div class="cui-absolute cui-top-0 cui-left-0 cui--ml-8 cui-pt-4 cui-pr-2 cui-flex cui-sm:-ml-10 cui-sm:pr-4">
                        <button type="button" class="cui-rounded-md cui-text-gray-300 cui-hover:text-white cui-focus:outline-none cui-focus:ring-2 cui-focus:ring-white">
                            <span class="cui-sr-only">Close panel</span>

                            <svg class="cui-h-6 cui-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" onClick={ props.onClose }>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div class="cui-h-full cui-flex cui-flex-col cui-py-6 cui-bg-white cui-shadow-xl cui-overflow-y-scroll">
                        <div class="cui-px-4 cui-sm:px-6">
                            <h2 class="cui-text-lg cui-font-medium cui-text-gray-900" id="slide-over-title">
                                { props.title }
                            </h2>
                        </div>
                        
                        <div class="cui-mt-6 cui-relative cui-flex-1 cui-px-4 cui-sm:px-6">
                        
                            { props.children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Sidebar
