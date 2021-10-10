import { Component } from 'solid-js'
import { Link, Outlet } from 'solid-app-router'

import { channelTypeResource, filters, setFilters } from '../store/channelTypes'
import { createModel, createFormModelFromStore } from '../directives'

import Header from '../components/Header'
import LoadMoreList from '../components/resources/LoadMoreList'

const skeleton = () =>  (
  <div class="cui-flex cui-items-center">
    <div class="cui-flex-grow">
      <div class="cui-flex cui-flex-col cui-space-y-2 ">
        <div class="cui-w-48 cui-bg-gray-300 cui-h-5 cui-rounded-md"></div>
        <div class="cui-w-32 cui-bg-gray-200 cui-h-4 cui-rounded-md"></div>
      </div>
    </div>
    <div class="cui-text-lg cui-border-2 cui-rounded-full cui-border-gray-200 cui-border-solid cui-px-2 cui-mx-2 cui-text-grey-300">&gt;</div>
  </div>
)

interface Props {
  limit?: number
}

const ChannelTypeList: Component<Props> = (props) => {
  const { modelFromStore } = createFormModelFromStore(filters, setFilters) 

  props.limit && setFilters('limit', props.limit)

  function emitEvent (element: HTMLElement, detail: string) {
    element.dispatchEvent(new CustomEvent('selected', {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail
    }))
  }

  return (
    <>
      <Header title="Channel Types" />
      <main>
        <div class="cui-max-w-7xl cui-mx-auto cui-py-6 cui-sm:px-6 cui-lg:px-8">
          <div class="cui-px-4 cui-py-6 cui-sm:px-0">
            <div class="cui-mx-auto cui-max-w-screen-xl cui-px-4 cui-sm:px-6 cui-lg:px-8">
              <div class="cui-sm:text-center cui-lg:text-left">
                <div class="cui-flex">
                  <input class="cui-font-bold cui-uppercase cui-rounded-lg cui-w-full cui-py-4 cui-pl-4 cui-text-gray-700 cui-bg-gray-100 cui-leading-tight cui-focus:outline-none cui-focus:shadow-outline cui-lg:text-sm cui-text-xs" type="text" placeholder="Search" use:modelFromStore="search" />
                </div>
                
                <LoadMoreList
                  resource={ channelTypeResource }
                  skeleton={ skeleton }
                >
									{ item => ( 
										<div class="cui-flex cui-items-center">
                      <div class="cui-flex-grow">
                        <strong>{ item.name }</strong> 
                        <div class="cui-text-sm">{ item.slug }</div>
                      </div>
                      <div class="cui-text-lg cui-border-2 cui-rounded-full cui-border-gray-200 cui-border-solid cui-px-2 cui-mx-2" onClick={(e) => emitEvent(e.currentTarget, item.name)}>&gt;</div>
                      {/* <Link href={`/channel-types/${item.id}`}>View</Link> */}
										</div> 
									)}
                </LoadMoreList>

                {/* <Outlet />                 */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChannelTypeList
