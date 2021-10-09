import { Component } from 'solid-js';

interface Props {
  title: string
}

const Header: Component<Props> = (props) => {
  return (
    <header class="cui-bg-white cui-shadow">
      <div class="cui-max-w-7xl cui-mx-auto cui-py-6 cui-px-4 cui-sm:px-6 cui-lg:px-8">
        <h1 class="cui-text-3xl cui-font-bold cui-leading-tight cui-text-gray-900">
          {props.title}
        </h1>
      </div>
    </header>
  );
};

export default Header;