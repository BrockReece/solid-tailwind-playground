import { Component } from 'solid-js'

import { channelTypeResource, search, setSearch } from '../store/channelTypes'

import Header from '../components/Header'
import LoadMoreList from '../components/resources/LoadMoreList'

const skeleton = () =>  (
  <div class="flex items-center">
    <div class="flex-grow">
      <div class="flex flex-col space-y-2 ">
        <div class="w-48 bg-gray-300 h-5 rounded-md"></div>
        <div class="w-32 bg-gray-200 h-4 rounded-md"></div>
      </div>
    </div>
    <div class="text-lg border-2 rounded-full border-gray-200 border-solid px-2 mx-2 text-grey-300">&gt;</div>
  </div>
)

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
                
                <LoadMoreList
                  resource={ channelTypeResource }
                  skeleton={ skeleton }
                >
									{ item => ( 
										<div class="flex items-center">
                      <div class="flex-grow">
                        <strong>{ item.name }</strong> 
                        <div class="text-sm">{ item.slug }</div>
                      </div>
                      <div class="text-lg border-2 rounded-full border-gray-200 border-solid px-2 mx-2">&gt;</div>
										</div> 
									)}
                </LoadMoreList>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resource
