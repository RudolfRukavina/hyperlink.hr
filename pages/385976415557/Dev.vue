<template>

  <Head>
    <title> Taxi | 24/7 - Need a taxi? Here's your ride.</title>
    <Meta name="description"
      content="Discover Taxi: Explore taxi prices, diverse transport services, and contact us effortlessly via phone, Viber, or WhatsApp!" />
    <link rel="canonical" href="https://www.taxiopatija.hr/" />
  </Head>


  <nav class="bg-black">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../../assets/img/vrsarlogo.webp" class="h-8" alt="Flowbite Logo" />
      </a>
      <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
        <button type="button" data-dropdown-toggle="language-dropdown-menu"
          class="inline-flex bg-transparent items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-black">
          <svg class="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
            <path fill="#b22234" d="M0 0h7410v3900H0z" />
            <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300" />
            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            <g fill="#fff">
              <g id="d">
                <g id="c">
                  <g id="e">
                    <g id="b">
                      <path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                      <use xlink:href="#a" y="420" />
                      <use xlink:href="#a" y="840" />
                      <use xlink:href="#a" y="1260" />
                    </g>
                    <use xlink:href="#a" y="1680" />
                  </g>
                  <use xlink:href="#b" x="247" y="210" />
                </g>
                <use xlink:href="#c" x="494" />
              </g>
              <use xlink:href="#d" x="988" />
              <use xlink:href="#c" x="1976" />
              <use xlink:href="#e" x="2470" />
            </g>
          </svg>
          English
        </button>
        <!-- Dropdown -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          id="language-dropdown-menu">
          <ul class="py-2 font-medium" role="none">
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                <div class="inline-flex items-center">
                  <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-us" viewBox="0 0 512 512">
                    <g fill-rule="evenodd">
                      <g stroke-width="1pt">
                        <path fill="#bd3d44"
                          d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)" />
                        <path fill="#fff"
                          d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)" />
                      </g>
                      <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                      <path fill="#fff"
                        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                        transform="scale(3.9385)" />
                    </g>
                  </svg>
                  English
                </div>
              </a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                <div class="inline-flex items-center">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true" role="img" class="h-3.5 w-3.5 rounded-full me-2"
                    preserveAspectRatio="xMidYMid meet" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M32 2C18.9 2 7.8 10.4 3.7 22h56.6C56.2 10.4 45.1 2 32 2z" fill="#ed4c5c"> </path>
                      <path d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62z" fill="#428bc1"> </path>
                      <path
                        d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7z"
                        fill="#f9f9f9"> </path>
                      <path
                        d="M42.9 25.2l2.6-6l-2-3.2l-3.3 1.2l-2.3-2.7l-3.1 1.8L32 14l-2.8 2.3l-3.1-1.8l-2.3 2.7l-3.3-1.2l-2 3.3l2.6 6c3.3-1.5 7-2.3 10.9-2.3c3.9-.2 7.6.7 10.9 2.2"
                        fill="#ffffff"> </path>
                      <path d="M34.7 16.5L32 14.3l-2.7 2.2l.5 6.2c.7-.1 1.5-.1 2.2-.1c.7 0 1.5 0 2.2.1l.5-6.2"
                        fill="#428bc1"> </path>
                      <path d="M32 50c6.2 0 11.3-5.1 11.3-11.3V25.3H20.7v13.4C20.7 44.9 25.8 50 32 50" fill="#ed4c5c">
                      </path>
                      <path d="M32 49.8c6.1 0 11.1-5 11.1-11.1V25.5H20.9v13.2c0 6.1 5 11.1 11.1 11.1" fill="#ffffff">
                      </path>
                      <g fill="#ed4c5c">
                        <path d="M25.6 25.9h-4.3v4.7h4.3v-4.7"> </path>
                        <path d="M25.6 35.3h4.3v-4.7h-4.3v4.7"> </path>
                        <path d="M21.3 38.7c0 .4 0 .8.1 1.3h4.2v-4.7h-4.3v3.4"> </path>
                        <path d="M34.1 35.3h-4.3V40h4.3v-4.7"> </path>
                        <path d="M34.1 44.7h4.3V40h-4.3v4.7"> </path>
                        <path d="M38.4 47.2c.9-.7 1.8-1.6 2.4-2.6h-2.4v2.6"> </path>
                        <path d="M25.6 44.7h4.3V40h-4.3v4.7"> </path>
                        <path d="M23.2 44.7c.7 1 1.5 1.8 2.4 2.6v-2.6h-2.4"> </path>
                        <path d="M32.7 49.3c.5 0 .9-.1 1.4-.2v-4.5h-4.3v4.5c.5.1.9.2 1.4.2c.5.1 1 .1 1.5 0"> </path>
                        <path d="M42.6 40c0-.4.1-.8.1-1.3v-3.4h-4.3V40h4.2"> </path>
                        <path d="M34.1 35.3h4.3v-4.7h-4.3v4.7"> </path>
                        <path d="M34.1 25.9h-4.3v4.7h4.3v-4.7"> </path>
                        <path d="M42.6 30.6v-4.7h-4.3v4.7h4.3"> </path>
                      </g>
                      <path d="M23.9 17.4l-3.3-1.2l-1.9 3l.7 1.6l1.8 4.1c1.3-.6 2.7-1.1 4.2-1.4l-1.5-6.1"
                        fill="#428bc1"> </path>
                      <path
                        d="M23.7 20.4c.1.2.2.5.2.8c0 .9-.7 1.6-1.6 1.6c-.8 0-1.4-.6-1.6-1.3c.3.5.8.8 1.4.8c.9 0 1.6-.7 1.6-1.6v-.3"
                        fill="#ffffff"> </path>
                      <path fill="#ffe62e"
                        d="M22.2 18.1v.1l-.1.6l.5.3v.1h-.1l-.5.2l-.1.5v.1l-.1-.1l-.4-.3l-.6.2v-.1l.1-.5l-.4-.4v-.1l.6-.2l.1-.5v-.1v.1l.4.3l.6-.1z">
                      </path>
                      <path d="M29.3 16.5l-3.1-1.7l-2.3 2.6l1.5 6c1.4-.4 2.9-.6 4.4-.7l-.5-6.2" fill="#2a5f9e"> </path>
                      <g fill="#ed4c5c">
                        <path d="M25 21.9c1.5-.4 3-.6 4.6-.8l-.1-1.6c-1.7.1-3.3.4-4.9.8l.4 1.6"> </path>
                        <path d="M24.3 18.9c1.7-.4 3.4-.7 5.1-.9l-.1-1.5c-1.8.2-3.6.5-5.4.9l.4 1.5"> </path>
                      </g>
                      <g fill="#ffe62e">
                        <path
                          d="M32 19.3c-.2 0-.5.7-.9.2c0 0 .3.4.3.6l-.3-.1c0 2.1 1.9 2 1.9 0l-.3.1c0-.1.3-.6.3-.6c-.5.5-.7-.1-1-.2">
                        </path>
                        <path
                          d="M33.2 16.4c-.2 0-.5.7-.9.2c0 0 .3.4.3.6l-.3-.1c0 2.1 1.9 2 1.9 0l-.3.1c0-.1.3-.6.3-.6c-.4.5-.7-.2-1-.2">
                        </path>
                        <path
                          d="M30.7 16.4c-.2 0-.5.7-.9.2c0 0 .3.4.3.6l-.3-.1c0 2.1 1.9 2 1.9 0l-.3.1c0-.1.3-.6.3-.6c-.4.5-.7-.2-1-.2">
                        </path>
                      </g>
                      <path d="M40.1 17.4l-2.3-2.7l-3.1 1.8l-.5 6.2c1.5.1 3 .4 4.4.7l1.5-6" fill="#2a5f9e"> </path>
                      <path
                        d="M35.3 17.8h.3c.2.1.2 0 .3-.1c.2-.1.8-.2 1.4.1c.1.1.7.1.7.1s-.5.2-1 0c.2.1.3.3.5.4c.1 0 .8.2.8.2s-.6.3-1 0c-.3-.3-.6-.6-1.1-.5l.3.1c-.1.1-.4.2-.5.1c0 .3 1 1.3 2.2 1c.5-.2.2.2.1.4c-.1.1-.5 2.3-1.6 1.8c0 0 .6-.2.6-.6l-.2-.2c-.4 0-.7 1.2-1.2.6c0 0 .6-.3.5-.8H36c-.3.1-.2 1.2-.8.9c0 0 .7-1 .3-1c-.1.2-.3.4-.3.6c.2.2-.5.2-.4 0c0-.1.5-.6.4-1.1c-.2-.1 0-1 .1-1.2c-.6 0-.2-.2-.1-.6c.2 0 .1 0 .1-.2"
                        fill="#ffe62e"> </path>
                      <path d="M42.8 24.9l2.5-5.7l-1.9-3l-3.3 1.2l-1.5 6c1.4.4 2.8.9 4.2 1.5" fill="#428bc1"> </path>
                      <path d="M39.6 19.6c1.7.4 3.3 1 4.8 1.7l-1 2.2c-1.4-.6-2.9-1.1-4.4-1.5l.6-2.4" fill="#ffffff">
                      </path>
                      <path d="M43.5 23.1l.6-1.5c-1.5-.7-3.1-1.2-4.7-1.6l-.4 1.5c1.6.4 3.1.9 4.5 1.6" fill="#ed4c5c">
                      </path>
                      <path d="M42 17.4l.1.6l-.4.4l.6.2l.1.6l.5-.4l.6.2l-.1-.6l.4-.4l-.6-.2l-.1-.6l-.4.4l-.7-.2"
                        fill="#ffe62e"> </path>
                    </g>
                  </svg>
                  Hrvatski
                </div>
              </a>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle="navbar-language" type="button"
          class="inline-flex items-center p-2 w-10 h-10 bg-black justify-center text-sm text-white rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-language" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#"
              class="block py-2 px-3  bg-white text-black rounded md:bg-transparent md:text-white md:underline underline-offset-2 md:hover:underline md:p-0"
              aria-current="page">Home</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-white hover:text-black md:hover:bg-transparent md:hover:underline underline-offset-2 md:hover:text-white ">About
              us</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-white hover:text-black md:hover:bg-transparent md:hover:underline underline-offset-2 md:hover:text-white ">Services</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-white hover:text-black md:hover:bg-transparent md:hover:underline underline-offset-2 md:hover:text-white ">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header class="-mt-20">
    <div class="w-full bg-center bg-cover"
      style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%), url(https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gle-class/suv/gallery/series/gallery-class/2024-GLE-SUV-GAL-017-K-FI-DR.jpg);">
      <div class="flex items-center justify-center w-full h-full bg-transparent py-24">
        <div class="text-center">
          <div class="container px-4 mx-auto">
            <div class="max-w-7xl mx-auto text-center">
              <a href="tel:+385 97 641 5557"
                class="text-yellow-300 ms-3 font-semibold uppercase underline text-2xl lg:text-3xl tracking-widest">+385
                97 641
                5557</a>
              <div
                class="flex justify-between my-3 text-white bg-black p-2 rounded-full bg-opacity-25 backdrop-blur-[1px]">
                <div
                  class="bg-black bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,1)] backdrop-blur-[1px] rounded-full me-5">
                  <svg class="w-20 h-20 rounded-full" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 455.731 455.731" xml:space="preserve"
                    fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <rect x="0" y="0" style="fill: #7d3daf" width="455.731" height="455.731"></rect>
                        <g>
                          <path style="fill: #ffffff"
                            d="M371.996,146.901l-0.09-0.36c-7.28-29.43-40.1-61.01-70.24-67.58l-0.34-0.07 c-48.75-9.3-98.18-9.3-146.92,0l-0.35,0.07c-30.13,6.57-62.95,38.15-70.24,67.58l-0.08,0.36c-9,41.1-9,82.78,0,123.88l0.08,0.36 c6.979,28.174,37.355,58.303,66.37,66.589v32.852c0,11.89,14.49,17.73,22.73,9.15l33.285-34.599 c7.219,0.404,14.442,0.629,21.665,0.629c24.54,0,49.09-2.32,73.46-6.97l0.34-0.07c30.14-6.57,62.96-38.15,70.24-67.58l0.09-0.36 C380.996,229.681,380.996,188.001,371.996,146.901z M345.656,264.821c-4.86,19.2-29.78,43.07-49.58,47.48 c-25.921,4.929-52.047,7.036-78.147,6.313c-0.519-0.014-1.018,0.187-1.38,0.559c-3.704,3.802-24.303,24.948-24.303,24.948 l-25.85,26.53c-1.89,1.97-5.21,0.63-5.21-2.09v-54.422c0-0.899-0.642-1.663-1.525-1.836c-0.005-0.001-0.01-0.002-0.015-0.003 c-19.8-4.41-44.71-28.28-49.58-47.48c-8.1-37.15-8.1-74.81,0-111.96c4.87-19.2,29.78-43.07,49.58-47.48 c45.27-8.61,91.17-8.61,136.43,0c19.81,4.41,44.72,28.28,49.58,47.48C353.765,190.011,353.765,227.671,345.656,264.821z">
                          </path>
                          <path style="fill: #ffffff"
                            d="M270.937,289.942c-3.044-0.924-5.945-1.545-8.639-2.663 c-27.916-11.582-53.608-26.524-73.959-49.429c-11.573-13.025-20.631-27.73-28.288-43.292c-3.631-7.38-6.691-15.049-9.81-22.668 c-2.844-6.948,1.345-14.126,5.756-19.361c4.139-4.913,9.465-8.673,15.233-11.444c4.502-2.163,8.943-0.916,12.231,2.9 c7.108,8.25,13.637,16.922,18.924,26.485c3.251,5.882,2.359,13.072-3.533,17.075c-1.432,0.973-2.737,2.115-4.071,3.214 c-1.17,0.963-2.271,1.936-3.073,3.24c-1.466,2.386-1.536,5.2-0.592,7.794c7.266,19.968,19.513,35.495,39.611,43.858 c3.216,1.338,6.446,2.896,10.151,2.464c6.205-0.725,8.214-7.531,12.562-11.087c4.25-3.475,9.681-3.521,14.259-0.624 c4.579,2.898,9.018,6.009,13.43,9.153c4.331,3.086,8.643,6.105,12.638,9.623c3.841,3.383,5.164,7.821,3.001,12.412 c-3.96,8.408-9.722,15.403-18.034,19.868C276.387,288.719,273.584,289.127,270.937,289.942 C267.893,289.017,273.584,289.127,270.937,289.942z">
                          </path>
                          <path style="fill: #ffffff"
                            d="M227.942,131.471c36.515,1.023,66.506,25.256,72.933,61.356c1.095,6.151,1.485,12.44,1.972,18.683 c0.205,2.626-1.282,5.121-4.116,5.155c-2.927,0.035-4.244-2.414-4.434-5.039c-0.376-5.196-0.637-10.415-1.353-15.568 c-3.78-27.201-25.47-49.705-52.545-54.534c-4.074-0.727-8.244-0.918-12.371-1.351c-2.609-0.274-6.026-0.432-6.604-3.675 c-0.485-2.719,1.81-4.884,4.399-5.023C226.527,131.436,227.235,131.468,227.942,131.471 C264.457,132.494,227.235,131.468,227.942,131.471z">
                          </path>
                          <path style="fill: #ffffff"
                            d="M283.434,203.407c-0.06,0.456-0.092,1.528-0.359,2.538c-0.969,3.666-6.527,4.125-7.807,0.425 c-0.379-1.098-0.436-2.347-0.438-3.529c-0.013-7.734-1.694-15.46-5.594-22.189c-4.009-6.916-10.134-12.73-17.318-16.248 c-4.344-2.127-9.042-3.449-13.803-4.237c-2.081-0.344-4.184-0.553-6.275-0.844c-2.534-0.352-3.887-1.967-3.767-4.464 c0.112-2.34,1.822-4.023,4.372-3.879c8.38,0.476,16.474,2.287,23.924,6.232c15.15,8.023,23.804,20.687,26.33,37.597 c0.114,0.766,0.298,1.525,0.356,2.294C283.198,199.002,283.288,200.903,283.434,203.407 C283.374,203.863,283.288,200.903,283.434,203.407z">
                          </path>
                          <path style="fill: #ffffff"
                            d="M260.722,202.523c-3.055,0.055-4.69-1.636-5.005-4.437c-0.219-1.953-0.392-3.932-0.858-5.832 c-0.918-3.742-2.907-7.21-6.055-9.503c-1.486-1.083-3.17-1.872-4.934-2.381c-2.241-0.647-4.568-0.469-6.804-1.017 c-2.428-0.595-3.771-2.561-3.389-4.839c0.347-2.073,2.364-3.691,4.629-3.527c14.157,1.022,24.275,8.341,25.719,25.007 c0.102,1.176,0.222,2.419-0.039,3.544C263.539,201.464,262.113,202.429,260.722,202.523 C257.667,202.578,262.113,202.429,260.722,202.523z">
                          </path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  class="bg-black bg-opacity-25 cursor-pointer hover:bg-opacity-75 transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,1)] backdrop-blur-[1px] rounded-full mx-5">
                  <svg class="w-20 h-20 rounded-full" xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp"
                    role="img" viewBox="0 0 512 512" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect width="512" height="512" rx="15%" fill="#25d366"></rect>
                      <path fill="#25d366" stroke="#ffffff" stroke-width="26" d="M123 393l14-65a138 138 0 1150 47z">
                      </path>
                      <path fill="#ffffff"
                        d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18">
                      </path>
                    </g>
                  </svg>
                </div>
                <div
                  class="bg-black bg-opacity-25 cursor-pointer hover:bg-opacity-75 transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,1)] backdrop-blur-[1px] rounded-full ms-5">
                  <svg class="w-20 h-20" viewBox="0 -0.5 25 25" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.24033 8.16795C6.99433 7.37295 7.26133 7.14995 7.58233 7.04695C7.80482 6.98843 8.03822 6.98499 8.26233 7.03695C8.55733 7.12295 8.63433 7.18795 9.60233 8.15095C10.4523 8.99695 10.5363 9.08895 10.6183 9.25095C10.7769 9.54253 10.8024 9.88825 10.6883 10.1999C10.6043 10.4349 10.4803 10.5909 9.96533 11.1089L9.62933 11.4459C9.54093 11.5356 9.51997 11.6719 9.57733 11.7839C10.3232 13.0565 11.3812 14.1179 12.6513 14.8679C12.7978 14.9465 12.9783 14.921 13.0973 14.8049L13.4203 14.4869C13.6199 14.2821 13.8313 14.0891 14.0533 13.9089C14.4015 13.6935 14.8362 13.6727 15.2033 13.8539C15.3823 13.9379 15.4423 13.9929 16.3193 14.8669C17.2193 15.7669 17.2483 15.7959 17.3493 16.0029C17.5379 16.3458 17.536 16.7618 17.3443 17.1029C17.2443 17.2949 17.1883 17.3649 16.6803 17.8839C16.3733 18.1979 16.0803 18.4839 16.0383 18.5259C15.6188 18.8727 15.081 19.043 14.5383 19.0009C13.5455 18.9101 12.5847 18.6029 11.7233 18.1009C9.81416 17.0894 8.18898 15.6155 6.99633 13.8139C6.73552 13.4373 6.50353 13.0415 6.30233 12.6299C5.76624 11.7109 5.48909 10.6638 5.50033 9.59995C5.54065 9.04147 5.8081 8.52391 6.24033 8.16795Z"
                        stroke="none" stroke-width="1.175" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path
                        d="M14.8417 4.29409C14.4518 4.15416 14.0224 4.35677 13.8824 4.74664C13.7425 5.1365 13.9451 5.56598 14.335 5.70591L14.8417 4.29409ZM18.7868 10.0832C18.9333 10.4707 19.3661 10.666 19.7536 10.5195C20.141 10.373 20.3364 9.94021 20.1899 9.55276L18.7868 10.0832ZM13.6536 6.52142C13.2495 6.43018 12.848 6.68374 12.7568 7.08778C12.6655 7.49182 12.9191 7.89333 13.3231 7.98458L13.6536 6.52142ZM16.5696 11.1774C16.6676 11.5799 17.0733 11.8267 17.4757 11.7287C17.8782 11.6307 18.125 11.2251 18.0271 10.8226L16.5696 11.1774ZM14.335 5.70591C16.3882 6.44286 18.0153 8.04271 18.7868 10.0832L20.1899 9.55276C19.2631 7.10139 17.3084 5.17942 14.8417 4.29409L14.335 5.70591ZM13.3231 7.98458C14.9238 8.34607 16.1815 9.58301 16.5696 11.1774L18.0271 10.8226C17.5042 8.67475 15.8098 7.0084 13.6536 6.52142L13.3231 7.98458Z"
                        fill="#ffffff"></path>
                    </g>
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <section class="bg-black bg-opacity-50 pt-8 backdrop-blur-[1px]">
        <div class="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

          <div class="mr-auto place-self-center lg:col-span-7">
            <div class="flex justify-between">
              <h1
                class="max-w-2xl mb-4 text-4xl font-bold leading-none tracking-tight md:text-4xl xl:text-5xl text-white drop-shadow-md">
                {{ taxiName }}</h1>
              <a href="" class=" mb-4">
                <div class="flex justify-evenly">
                  <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 22 20">
                      <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 22 20">
                      <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 22 20">
                      <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 22 20">
                      <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 22 20">
                      <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span class="bg-white text-black text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">5.0
                  </span>
                </div>
                <p class="text-md text-end font-medium text-white">
                  <span class="text-2xl font-bold">{{ ratings }}</span> global ratings
                </p>
              </a>

            </div>
            <p class="max-w-2xl mb-4 font-light lg:mt-8 md:text-lg lg:text-xl text-gray-100">
              Through it’s many years of business, Taxi Vrsar M.T. provides a top service of taxi transportation,
              transfers and excursions in the area of Vrsar. We are at your disposal every day 0-24. Contact us and
              book yourself professional and safe ride.
            </p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <NuxtLink :to="'/' + taxiNumber + '/demo'"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-lg font-medium text-center text-black border border-yellow-300 rounded-lg sm:w-auto bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-100 ">
                Rezerviraj odmah
              </NuxtLink>

            </div>

          </div>

        </div>
      </section>
    </div>

    <div class="grid grid-cols-2 gap-2 bg-black p-2">
      <div class="col-span-1 lg:col-span-1">
        <NuxtLink class="portfolio-item block relative" to="/ostalo">
          <div class=" absolute inset-0 bg-black bg-opacity-50 transition-opacity lg:opacity-0 hover:opacity-100">
            <div class="caption absolute inset-0 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="text-2xl font-bold tracking-wide drop-shadow-md">Transfers
                </div>
              </div>
            </div>
          </div>
          <img class="object-cover w-full h-full"
            src="https://lanterna-taxi-porec.com/wp-content/uploads/2024/05/IMG_0009-2-600x600.jpg" alt="..." />
        </NuxtLink>
      </div>
      <div class="col-span-1 lg:col-span-1">
        <NuxtLink class="portfolio-item block relative" to="/ostalo">
          <div class=" absolute inset-0 bg-black bg-opacity-50 transition-opacity lg:opacity-0 hover:opacity-100">
            <div class="caption absolute inset-0 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="text-2xl font-bold tracking-wide drop-shadow-md">Excursions
                </div>
              </div>
            </div>
          </div>
          <img class="object-cover w-full h-full"
            src="https://lanterna-taxi-porec.com/wp-content/uploads/2024/05/IMG_0045-600x600.jpg" alt="..." />
        </NuxtLink>
      </div>
      <div class="col-span-2 lg:col-span-2">
        <NuxtLink class="portfolio-item block relative" to="/ostalo">
          <div
            class=" absolute inset-0 bg-black bg-opacity-0 md:bg-opacity-75 transition-opacity lg:opacity-0 hover:opacity-100">
            <div class="caption absolute right-0 md:inset-0 flex items-center justify-center">
              <div class="text-white text-center">
                <div
                  class="text-xl bg-black lg:bg-transparent bg-opacity-50 pe-6 py-1 ps-3 rounded-bl-lg font-semibold tracking-wide drop-shadow-md">
                  Organizirana
                  putovanja
                </div>
              </div>
            </div>
          </div>
          <img class="object-cover w-full h-full max-h-[40vw]"
            src="https://dailytravelpill.com/wp-content/uploads/2021/01/croatia-travel-guide-page-cover.jpg"
            alt="..." />
        </NuxtLink>
      </div>
    </div>
  </header>

  <main>
    <div class="w-full bg-center  bg-cover"
      style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%), url(https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gle-class/suv/gallery/series/gallery-class/2024-GLE-SUV-GAL-017-K-FI-DR.jpg);">
      <div
        class="flex w-full justify-center mx-auto text-center py-8 text-white bg-black bg-opacity-70 max-w-xl text-3xl">
        <h3 class="">Rezervacije</h3>
      </div>
      <section class="bg-black bg-opacity-65 flex justify-center p-5 max-w-xl mx-auto shadow-lg">
        <div class="grid grid-cols-1 w-full">
          <div class="py-0 px-4">
            <form action="#" class="space-y-8">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-white">Vaše
                  ime</label>
                <input type="text" id="name"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-black text-[16px] rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required />
              </div>
              <div>
                <label for="tel" class="block mb-2 text-sm font-medium text-white">Vaš broj
                  telefona</label>
                <input type="tel" id="tel"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-black text-[16px] rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required />
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Vaša
                  poruka</label>
                <textarea id="message" rows="10"
                  class="block p-2.5 w-full text-[16px] text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-white focus:border-white"
                  placeholder="">
                </textarea>
              </div>
              <div
                class="flex justify-between my-3 text-white bg-black p-2 rounded-full bg-opacity-35 backdrop-blur-[1px]">
                <div
                  class="bg-black bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,1)] backdrop-blur-[1px] rounded-full me-5">
                  <svg class="w-14 h-14 p-1 rounded-full" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 455.731 455.731" xml:space="preserve"
                    fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <rect x="0" y="0" style="fill: #7d3daf" width="455.731" height="455.731"></rect>
                        <g>
                          <path style="fill: #ffffff"
                            d="M371.996,146.901l-0.09-0.36c-7.28-29.43-40.1-61.01-70.24-67.58l-0.34-0.07 c-48.75-9.3-98.18-9.3-146.92,0l-0.35,0.07c-30.13,6.57-62.95,38.15-70.24,67.58l-0.08,0.36c-9,41.1-9,82.78,0,123.88l0.08,0.36 c6.979,28.174,37.355,58.303,66.37,66.589v32.852c0,11.89,14.49,17.73,22.73,9.15l33.285-34.599 c7.219,0.404,14.442,0.629,21.665,0.629c24.54,0,49.09-2.32,73.46-6.97l0.34-0.07c30.14-6.57,62.96-38.15,70.24-67.58l0.09-0.36 C380.996,229.681,380.996,188.001,371.996,146.901z M345.656,264.821c-4.86,19.2-29.78,43.07-49.58,47.48 c-25.921,4.929-52.047,7.036-78.147,6.313c-0.519-0.014-1.018,0.187-1.38,0.559c-3.704,3.802-24.303,24.948-24.303,24.948 l-25.85,26.53c-1.89,1.97-5.21,0.63-5.21-2.09v-54.422c0-0.899-0.642-1.663-1.525-1.836c-0.005-0.001-0.01-0.002-0.015-0.003 c-19.8-4.41-44.71-28.28-49.58-47.48c-8.1-37.15-8.1-74.81,0-111.96c4.87-19.2,29.78-43.07,49.58-47.48 c45.27-8.61,91.17-8.61,136.43,0c19.81,4.41,44.72,28.28,49.58,47.48C353.765,190.011,353.765,227.671,345.656,264.821z">
                          </path>
                          <path style="fill: #ffffff"
                            d="M270.937,289.942c-3.044-0.924-5.945-1.545-8.639-2.663 c-27.916-11.582-53.608-26.524-73.959-49.429c-11.573-13.025-20.631-27.73-28.288-43.292c-3.631-7.38-6.691-15.049-9.81-22.668 c-2.844-6.948,1.345-14.126,5.756-19.361c4.139-4.913,9.465-8.673,15.233-11.444c4.502-2.163,8.943-0.916,12.231,2.9 c7.108,8.25,13.637,16.922,18.924,26.485c3.251,5.882,2.359,13.072-3.533,17.075c-1.432,0.973-2.737,2.115-4.071,3.214 c-1.17,0.963-2.271,1.936-3.073,3.24c-1.466,2.386-1.536,5.2-0.592,7.794c7.266,19.968,19.513,35.495,39.611,43.858 c3.216,1.338,6.446,2.896,10.151,2.464c6.205-0.725,8.214-7.531,12.562-11.087c4.25-3.475,9.681-3.521,14.259-0.624 c4.579,2.898,9.018,6.009,13.43,9.153c4.331,3.086,8.643,6.105,12.638,9.623c3.841,3.383,5.164,7.821,3.001,12.412 c-3.96,8.408-9.722,15.403-18.034,19.868C276.387,288.719,273.584,289.127,270.937,289.942 C267.893,289.017,273.584,289.127,270.937,289.942z">
                          </path>
                          <path style="fill: #ffffff"
                            d="M227.942,131.471c36.515,1.023,66.506,25.256,72.933,61.356c1.095,6.151,1.485,12.44,1.972,18.683 c0.205,2.626-1.282,5.121-4.116,5.155c-2.927,0.035-4.244-2.414-4.434-5.039c-0.376-5.196-0.637-10.415-1.353-15.568 c-3.78-27.201-25.47-49.705-52.545-54.534c-4.074-0.727-8.244-0.918-12.371-1.351c-2.609-0.274-6.026-0.432-6.604-3.675 c-0.485-2.719,1.81-4.884,4.399-5.023C226.527,131.436,227.235,131.468,227.942,131.471 C264.457,132.494,227.235,131.468,227.942,131.471z">
                          </path>
                          <path style="fill: #ffffff"
                            d="M283.434,203.407c-0.06,0.456-0.092,1.528-0.359,2.538c-0.969,3.666-6.527,4.125-7.807,0.425 c-0.379-1.098-0.436-2.347-0.438-3.529c-0.013-7.734-1.694-15.46-5.594-22.189c-4.009-6.916-10.134-12.73-17.318-16.248 c-4.344-2.127-9.042-3.449-13.803-4.237c-2.081-0.344-4.184-0.553-6.275-0.844c-2.534-0.352-3.887-1.967-3.767-4.464 c0.112-2.34,1.822-4.023,4.372-3.879c8.38,0.476,16.474,2.287,23.924,6.232c15.15,8.023,23.804,20.687,26.33,37.597 c0.114,0.766,0.298,1.525,0.356,2.294C283.198,199.002,283.288,200.903,283.434,203.407 C283.374,203.863,283.288,200.903,283.434,203.407z">
                          </path>
                          <path style="fill: #ffffff"
                            d="M260.722,202.523c-3.055,0.055-4.69-1.636-5.005-4.437c-0.219-1.953-0.392-3.932-0.858-5.832 c-0.918-3.742-2.907-7.21-6.055-9.503c-1.486-1.083-3.17-1.872-4.934-2.381c-2.241-0.647-4.568-0.469-6.804-1.017 c-2.428-0.595-3.771-2.561-3.389-4.839c0.347-2.073,2.364-3.691,4.629-3.527c14.157,1.022,24.275,8.341,25.719,25.007 c0.102,1.176,0.222,2.419-0.039,3.544C263.539,201.464,262.113,202.429,260.722,202.523 C257.667,202.578,262.113,202.429,260.722,202.523z">
                          </path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  class="bg-black bg-opacity-25 cursor-pointer hover:bg-opacity-75 transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,1)] backdrop-blur-[1px] rounded-full mx-5">
                  <svg class="w-14 h-14 p-1 rounded-full" xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp"
                    role="img" viewBox="0 0 512 512" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect width="512" height="512" rx="15%" fill="#25d366"></rect>
                      <path fill="#25d366" stroke="#ffffff" stroke-width="26" d="M123 393l14-65a138 138 0 1150 47z">
                      </path>
                      <path fill="#ffffff"
                        d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18">
                      </path>
                    </g>
                  </svg>
                </div>
                <div
                  class="bg-black bg-opacity-25 cursor-pointer hover:bg-opacity-75 transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,1)] backdrop-blur-[1px] rounded-full ms-5">
                  <svg class="w-14 h-14 p-1 rounded-full" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                      stroke-width="0.24000000000000005"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M19 21V15M19 15L17 17M19 15L21 17M21 11V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.0799 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H13M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863"
                        stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import dayjs from "dayjs";

const i18n = useI18n();


//USER DATA
const taxiName = "Taxi Vrsar"
const taxiCity = "Vrsar"
const taxiUrl = "taxivrsar.hr"
const taxiNumber = "385976415557"
const ratings = "108"
const review = "Ljubazan, susretljiv i siguran vozač, korektna cijena, čist auto, ugodna glazba. Definitivno ću ponovno koristiti."
const reviewName = "Marija"

import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";


onMounted(() => {
  // if (!window.location.hash) {
  //   scrollToSection("#start");
  // }
  i18n.locale.value = navigator.language.split("-")[0];
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();

});



function scrollToSection(hash) {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const isDay = ref(true);

const currentTime = ref(dayjs().format("HH:mm"));

onMounted(() => {
  setInterval(() => {
    currentTime.value = dayjs().format("HH:mm");
  }, 1000);
  getPeriodOfDay();
});

const getPeriodOfDay = () => {
  if (dayjs().hour() > 5 && dayjs().hour() < 22) {
    isDay.value = true;
  } else {
    isDay.value = false;
  }
};

useHead({
  title: "Taxi | 24/7 - Need a taxi? Here's your ride.",
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content:
        "Discover Taxi: Explore taxi prices, diverse transport services, and contact us effortlessly via phone, Viber, or WhatsApp!",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://www.taxiopatija.hr",
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:title",
      property: "og:title",
      content: " Taxi | 24/7 - Need a taxi? Here's your ride.",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Discover Taxi: Explore taxi prices, diverse transport services, and contact us effortlessly via phone, Viber, or WhatsApp!",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://www.taxiopatija.hr/opatija.jpeg",
    },
  ],
  bodyAttrs: {
    class: "",
  },
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "The station for all transportation needs!",
        url: "https://www.taxiopatija.hr/",
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        image: "https://www.taxiopatija.hr/opatija.jpeg",
        url: "https://www.taxiopatija.hr",
        sameAs: ["https://taxiopatija.hr"],
        logo: "https://www.taxiopatija.hr/opatija.jpeg",
        name: "Taxi",
        description:
          "Taxi is a renowned tourist agency company headquartered in Opatija, Croatia. Taxi offers top-notch transfer services both domestically and internationally with a mission to ensure comfortable, safe, and reliable travel for all clients, regardless of destination or travel time.",
        email: "anterukavina@yahoo.com.hr",
        telephone: "+385999999999",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Ul. Dr. Ante Mandića 2",
          addressLocality: "Opatija",
          addressCountry: "Croatia",
          addressRegion: "Primorje-Gorski Kotar County",
          postalCode: "51410",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+385999999999",
          email: "anterukavina@yahoo.com.hr",
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        image: "https://www.taxiopatija.hr/opatija.jpeg",
        name: "Taxi",
        description:
          "Taxi is a renowned tourist agency company headquartered in Opatija, Croatia. Taxi offers top-notch transfer services both domestically and internationally with a mission to ensure comfortable, safe, and reliable travel for all clients, regardless of destination or travel time.",
        url: "https://www.taxiopatija.hr",
        logo: "https://www.taxiopatija.hr/opatija.jpeg",
        openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-24:00",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ul. Dr. Ante Mandića 2",
          addressLocality: "Opatija",
          addressCountry: "Croatia",
          addressRegion: "Primorje-Gorski Kotar County",
          postalCode: "51410",
        },
        telephone: "+385999999999",
        priceRange: "$$",
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Vedran Mihailovic",
        },
        datePublished: "2024-03-26",
        description: "Vrhunska i brza usluga! Vozač vrlo pristojan i uljudan.",
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Taxi - taxiopatija.hr",
          image: "https://www.taxiopatija.hr/opatija.jpeg",
          telephone: "+385999999999",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ul. Dr. Ante Mandića 2",
            addressLocality: "Opatija",
            addressCountry: "Croatia",
            addressRegion: "Primorje-Gorski Kotar County",
            postalCode: "51410",
          },
        },
      }),
    },
  ],
});

useSeoMeta({
  title: " Taxi | 24/7 - Need a taxi? Here's your ride.",
  ogTitle: " Taxi | 24/7 - Need a taxi? Here's your ride.",
  description:
    "Discover Taxi: Explore taxi prices, diverse transport services, and contact us effortlessly via phone, Viber, or WhatsApp!",
  ogDescription:
    "Discover Taxi: Explore taxi prices, diverse transport services, and contact us effortlessly via phone, Viber, or WhatsApp!",
  ogImage: "https://www.taxiopatija.hr/opatija.jpeg",
  twitterCard: "https://www.taxiopatija.hr/opatija.jpeg",
});
</script>

<style scoped>
.line-remover {
  background: linear-gradient(to bottom, white 0%, #0ea5e9 5%, #0ea5e9 100%);
}


.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

#lang-switch img {
  width: 32px;
  height: 32px;
  opacity: 0.5;
  transition: all 0.5s;
  margin: auto 3px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#lang-switch img:hover {
  cursor: pointer;
  opacity: 1;
}

.fr_lang,
.en_lang {
  display: none;
  transition: display 0.5s;
}

/* Language */
.active-lang {
  display: flex !important;
  transition: display 0.5s;
}

.active-flag {
  transition: all 0.5s;
  opacity: 1 !important;
}

.gradient {
  background: #e6dada;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #0065d0, #0093d7);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #0065d0, #0093d7);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.gradientWorkHours {
  background: #e6dada;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #0093d7, #00a3d0);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #0093d7, #00a3d0);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.a {
  fill: #ffffff;
}

.b {
  fill: #87cce3;
}

.c {
  fill: #211715;
}

.hero-photo {
  width: 100%;
  object-fit: cover;
  border-radius: 0 0 1000em 1000em / 0 0 100em 100em;
}

.mid-hero-photo {
  width: 100%;
  object-fit: cover;
  border-radius: 1800em 1800em 1800em 1800em / 80em 80em 80em 80em;
}

.footer-border {
  width: 100%;
  object-fit: cover;
  border-radius: 1000em 1000em 0 0 / 20em 20em 0 0;
  border-top: 0.1px dotted rgba(0, 30, 180, 0.347);
  background: rgb(0, 29, 180);
  background: linear-gradient(0deg,
      rgba(0, 29, 180, 0.0970982142857143) 0%,
      rgba(0, 159, 180, 0.09429709383753504) 100%);
}

.hero-hours {
  font-weight: 600;
  color: white;
  background: rgb(0, 153, 180);
  background: linear-gradient(0deg,
      rgba(0, 153, 180, 0.9990589985994398) 0%,
      rgba(0, 114, 180, 1) 100%);
  border-radius: 23px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

body {
  background: rgb(58, 59, 180);
  background: linear-gradient(0deg,
      rgba(58, 59, 180, 0) 0%,
      rgba(29, 208, 253, 0.0746892507002801) 75%,
      rgba(147, 69, 252, 0) 100%);
}

button {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.custom-shadow {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.credit {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  font-family: arial;
}

.switch {
  position: relative;
  overflow: hidden;
  width: 7.5rem;
  height: 4rem;
}

.switch input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
}

.switch label {
  cursor: pointer;
}

.background {
  z-index: 1;
  position: absolute;
  width: 7.5rem;
  height: 4rem;
  border-radius: 2.5rem;
  border: 0.25rem solid #202020;
  background: linear-gradient(to right, #484848 0%, #202020 100%);
  transition: all 0.3s;
}

.switch input:checked~.fill {
  background: #e9f8fd;
}

.stars1,
.stars2 {
  position: absolute;
  height: 0.4rem;
  width: 0.4rem;
  background: #ffffff;
  border-radius: 50%;
  transition: 0.3s all ease;
}

.stars1 {
  top: 6px;
  right: 23px;
}

.stars2 {
  top: 40px;
  right: 48px;
}

.stars1:after,
.stars1:before,
.stars2:after,
.stars2:before {
  position: absolute;
  content: "";
  display: block;
  height: 0.25rem;
  width: 0.25rem;
  background: #ffffff;
  border-radius: 50%;
  transition: 0.2s all ease;
}

.stars1:after {
  top: 8px;
  right: 20px;
}

.stars1:before {
  top: 18px;
  right: -12px;
}

.stars2:after {
  top: -8px;
  right: -16px;
}

.stars2:before {
  top: 6px;
  right: -26px;
}

.sun-moon {
  z-index: 2;
  position: absolute;
  left: 0;
  display: inline-block;
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
  background: #fffdf2;
  border-radius: 50%;
  transition: all 0.5s ease;

  /* Default to Moon */
  border: 0.25rem solid #dee2c6;
}

.sun-moon .dots {
  position: absolute;
  top: 3px;
  left: 23px;
  height: 1rem;
  width: 1rem;
  background: #efeedb;
  border: 0.25rem solid #dee2c6;
  border-radius: 50%;
  transition: 0.4s all ease;
}

.sun-moon .dots:after,
.sun-moon .dots:before {
  position: absolute;
  content: "";
  display: block;
  height: 0.25rem;
  width: 0.25rem;
  background: #efeedb;
  border: 0.25rem solid #dee2c6;
  border-radius: 50%;
  transition: 0.4s all ease;
}

.sun-moon .dots:after {
  top: -4px;
  left: -26px;
}

.sun-moon .dots:before {
  top: 18px;
  left: -10px;
}

/* Transition to Sun */

.switch input:checked~.sun-moon {
  left: calc(100% - 4rem);
  background: #f5ec59;
  border-color: #e7c65c;
  transform: rotate(-25deg);
}

.switch input:checked~.sun-moon .dots,
.switch input:checked~.sun-moon .dots:after,
.switch input:checked~.sun-moon .dots:before {
  background: #ffffff;
  border-color: #ffffff;
}

.switch input:checked~.sun-moon .dots {
  height: 1.5rem;
  width: 1.5rem;
  top: 0px;
  left: -20px;
  transform: rotate(25deg);
}

.switch input:checked~.sun-moon .dots:after {
  height: 0.65rem;
  width: 0.65rem;
  top: 2px;
  left: -12px;
}

.switch input:checked~.sun-moon .dots:before {
  height: 0.4rem;
  width: 0.4rem;
  top: 6px;
  left: 14px;
}

.switch input:checked~.background .stars1,
.switch input:checked~.background .stars2 {
  opacity: 0;
  transform: translateY(2rem);
}

.switch input:checked~.background {
  border: 0.25rem solid #78c1d5;
  background: linear-gradient(to right, #78c1d5 0%, #bbe7f5 100%);
}
</style>
