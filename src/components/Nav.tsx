import { Component, createMemo, createSignal, For } from 'solid-js';
import { Link, useLocation } from 'solid-app-router'

const Nav: Component = () => {
  const [showProfileMenu, setShowProfileMenu] = createSignal(false);
  const [showMenu, setShowMenu] = createSignal(false);
  const location = useLocation()
  const currentLocation = createMemo(() => location.pathname);

  const links = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
    { text: 'Channel Types', to: '/channel-types' },
  ];
  const activeClass = 'cui-text-white cui-bg-gray-900';
  const inactiveClass = 'cui-text-gray-300 cui-hover:text-white cui-hover:bg-gray-700';

  return (
    <nav class="cui-bg-gray-800">
      <div class="cui-max-w-7xl cui-mx-auto cui-px-4 cui-sm:px-6 cui-lg:px-8">
        <div class="cui-flex cui-items-center cui-justify-between cui-h-16">
          <div class="cui-flex cui-items-center">
            <div class="cui-flex-shrink-0">
              <img
                class="cui-h-8 cui-w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow logo"
              />
            </div>
            <div class="cui-hidden cui-md:block">
              <div class="cui-ml-10 cui-flex cui-items-baseline cui-space-x-4">
                <For each={links}>
                    {(link, index) => (<Link
                        href={link.to}
                        class={`cui-px-3 cui-py-2 cui-rounded-md cui-text-sm cui-font-medium ${
                          currentLocation() === link.to ? activeClass : inactiveClass } ${index() > 0 && 'ml-4'}`}>
                            {link.text}
                    </Link>)}
                </For>
              </div>
            </div>
          </div>
          <div class="cui-hidden cui-md:inline-block">
            <div class="cui-ml-4 cui-flex cui-items-center cui-md:ml-6">
            <button class="cui-bg-gray-800 cui-p-1 cui-rounded-full cui-text-gray-400 cui-hover:text-white cui-focus:outline-none cui-focus:ring-2 cui-focus:ring-offset-2 cui-focus:ring-offset-gray-800 cui-focus:ring-white">
              <span class="cui-sr-only">View notifications</span>
              <svg class="cui-h-6 cui-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

              {/* Profile dropdown */}
              <div class="cui-ml-3 cui-relative">
                <div>
                  <button
                    class="cui-max-w-xs cui-bg-gray-800 cui-rounded-full cui-flex cui-items-center cui-text-sm cui-focus:outline-none cui-focus:ring-2 cui-focus:ring-offset-2 cui-focus:ring-offset-gray-800 cui-focus:ring-white"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                    onClick={() => setShowProfileMenu(prev => !prev)}
                  >
                    <span class="cui-sr-only">Open user menu</span>
                    <img class="cui-h-8 cui-w-8 cui-rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
                {/*  
                Profile dropdown panel, show/hide based on dropdown state.
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              */}
                {showProfileMenu() && (
                  <div class="cui-origin-top-right cui-absolute cui-right-0 cui-mt-2 cui-w-48 cui-rounded-md cui-shadow-lg cui-py-1 cui-bg-white cui-ring-1 cui-ring-black cui-ring-opacity-5">
                    <div
                      class="cui-py-1 cui-rounded-md cui-bg-white cui-shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        class="cui-block cui-px-4 cui-py-2 cui-text-sm cui-text-gray-700 cui-hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        class="cui-block cui-px-4 cui-py-2 cui-text-sm cui-text-gray-700 cui-hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        class="cui-block cui-px-4 cui-py-2 cui-text-sm cui-text-gray-700 cui-hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="cui--mr-2 cui-flex cui-md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setShowMenu(prev => !prev)}
              class="cui-inline-flex cui-items-center cui-justify-center cui-p-2 cui-rounded-md cui-text-gray-400 cui-hover:text-white cui-hover:bg-gray-700 cui-focus:outline-none cui-focus:bg-gray-700 cui-focus:text-white"
            >
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                class="cui-block cui-h-6 cui-w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                class="cui-hidden cui-h-6 cui-w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu open: "block", Menu closed: "hidden" */}
      <div class={`cui-md:hidden ${showMenu() ? 'cui-block' : 'cui-hidden'}`}>
        <div class="cui-px-2 cui-pt-2 cui-pb-3 cui-sm:px-3">
            <For each={links}>
                {(link, index) => (
                  <Link href={link.to} class={`cui-block cui-px-3 cui-py-2 cui-rounded-md cui-text-sm cui-font-medium ${
                    currentLocation() === link.to ? activeClass : inactiveClass } ${index() > 0 && 'mt-1'}`}
                  >
                    {link.text}
                  </Link>)}
            </For>
        </div>
        <div class="cui-pt-4 cui-pb-3 cui-border-t cui-border-gray-700">
          <div class="cui-flex cui-items-center cui-px-5">
            <div class="cui-flex-shrink-0">
              <img
                class="cui-h-10 w-10 cui-rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="cui-ml-3">
              <div class="cui-text-base cui-font-medium cui-leading-none cui-text-white">
                Tom Cook
              </div>
              <div class="cui-text-sm cui-font-medium cui-leading-none cui-text-gray-400">
                tom@example.com
              </div>
            </div>
          </div>
          <div class="cui-mt-3 cui-px-2 cui-space-y-1">
            <a
              href="#"
              class="cui-block cui-px-3 cui-py-2 cui-rounded-md cui-text-base cui-font-medium cui-text-gray-400 cui-hover:text-white cui-hover:bg-gray-700"
            >
              Your Profile
            </a>
            <a
              href="#"
              class="cui-block cui-px-3 cui-py-2 cui-rounded-md cui-text-base cui-font-medium cui-text-gray-400 cui-hover:text-white cui-hover:bg-gray-700"
            >
              Settings
            </a>
            <a
              href="#"
              class="cui-block cui-px-3 cui-py-2 cui-rounded-md cui-text-base cui-font-medium cui-text-gray-400 cui-hover:text-white cui-hover:bg-gray-700"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;