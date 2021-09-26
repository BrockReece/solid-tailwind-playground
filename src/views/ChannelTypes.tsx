import { Component, Show } from 'solid-js'

import { channelTypeResource, loadMoreChannelTypes, search, setSearch } from '../store/channelTypes'

import Btn from '../components/Btn'
import Header from '../components/Header'
import ResourceList from '../components/resources/List'

const Resource: Component = () => {
  return (
    <>
      <Header title="Channel Types" />
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div class="sm:text-center lg:text-left">
                <div class="flex">
                    <input class="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search"value={ search() } onInput={ ({currentTarget}) => setSearch(currentTarget.value) }/>
                </div>
                
                <ResourceList
                  resource={ channelTypeResource }
                >
									{ item => ( 
										<div class="p-3 border-b-2">
											<strong>{ item.name }</strong> 
											<div>{ item.slug }</div>
										</div> 
									)}
              </ResourceList>
                
                <Show when={ channelTypeResource[0]()?.next }>
                  <div class="pt-2 text-center">
                      <Btn onClick={ loadMoreChannelTypes }>Load More</Btn>
                  </div>
                </Show>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resource
