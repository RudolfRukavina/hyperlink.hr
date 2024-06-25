<template>

  <Head>
    <Title>Hyperlink - Taxi služba</Title>
    <Meta name="description"
      content="Najpovoljniji najam putničkih kombi vozila (8+1 sjedala) i automobila u Primorsko-goranskoj županiji! Otvoreni smo 24 sata svaki dan." />
    <Style type="text/css" />
  </Head>
  <!--Hero-->


  <body>
    <header class="fixed top-0 w-full z-50">
      <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <NuxtLink :to="'/' + taxiNumber + '/prezentacija'" class="flex items-center">
            <img src="../../assets/img/hplink.webp" class="h-10 mr-3 sm:h-16" alt="Hyperlink Logo" />

          </NuxtLink>
          <div class="flex items-center lg:order-2">

            <!-- <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> -->
            <a href="tel:+385992053344"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Naruči
              izradu</a>
            <button data-collapse-toggle="mobile-menu-2" type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NuxtLink :to="'/' + taxiNumber + '/prezentacija'"
                  class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Prezentacija</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/' + taxiNumber + '/demo'"
                  class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Primjer
                  web stranice</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{ path: '/' + taxiNumber + '/prezentacija', hash: '#česta-pitanja' }"
                  class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Često
                  postavljena pitanja</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{ path: '/' + taxiNumber + '/prezentacija', hash: '#cijena' }"
                  class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Cijena</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <section class=" pt-20">
      <div class="max-w-screen-xl px-4 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-screen-sm mx-auto text-center">

          <p class="font-light text-gray-500 dark:text-gray-400 md:text-lg">Na
            <span class='font-bold text-lg'>50% popusta</span> do<span class='font-bold text-lg'> 11.07.2024.</span>
          </p>

        </div>
      </div>

    </section>
    <!-- Start block -->
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
          <img src="../../assets/img/taximockup2.png" class="p-2 rounded-xl" alt="hero image">
        </div>
        <div class="mr-auto place-self-center lg:col-span-7">

          <p class="max-w-2xl mt-6 font-light text-gray-500 lg:mt-8 md:text-lg lg:text-xl dark:text-gray-400">
            Poštovani
          </p>

          <h1
            class="max-w-2xl  text-5xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            {{ taxiName }}</h1>
          <p class="max-w-2xl mb-4 font-light text-gray-500 lg:mt-8 md:text-lg lg:text-xl dark:text-gray-400">
            Pripremili smo <NuxtLink :to="'/' + taxiNumber + '/demo'">web stranicu</NuxtLink> za Vas.
          </p>
          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <NuxtLink :to="'/' + taxiNumber + '/demo'"
              class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white border border-blue-400 rounded-lg sm:w-auto bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Pregled stranice
            </NuxtLink>

          </div>

        </div>

      </div>
    </section>
    <!-- End block -->
    <!-- Start block -->
    <!-- End block -->
    <!-- Start block -->
    <section class="">

      <div class="w-full mx-auto space-y-12 lg:space-y-20  lg:px-6">
        <!-- Row -->
        <div class="">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="mx-auto mt-4 max-w-2xl  ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
              <div class="p-8 relative bg-white shadow-inner sm:p-10 lg:flex-auto" id="cijena">

                <h3 class="text-3xl font-bold tracking-tight text-gray-900 mt-5">Taxi web stranica</h3>
                <div class="mt-5 flex items-center gap-x-4">
                  <h4 class="flex-none text-sm font-semibold leading-6 text-blue-600">Što je uključeno</h4>
                  <div class="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul role="list"
                  class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd" />
                    </svg>
                    Web stranica
                  </li>
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd" />
                    </svg>
                    Hosting (1 godina)
                  </li>
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd" />
                    </svg>
                    SEO Optimizacija
                  </li>
                  <li class="flex gap-x-3">
                    <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd" />
                    </svg>
                    Domena (1 godina)
                  </li>
                </ul>
              </div>
              <div class="mt-5 px-8 flex items-center gap-x-4">

                <h4 class="flex-none text-sm font-semibold leading-6 text-blue-600">Cijena</h4>
                <div class="h-px flex-auto bg-gray-100"></div>
              </div>
              <div class="-mt-2 bg-white  p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div
                  class="rounded-md bg-white py-4  text-center lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                  <div class="mx-auto max-w-xs px-8">
                    <p class="mt-6 flex items-baseline justify-center gap-x-2">
                      <span class="text-5xl font-bold tracking-tight text-gray-900 line-through">440</span>
                      <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">EUR</span>
                    </p>
                    <p class="flex items-center justify-center mb-6 space-x-2 font-bold">
                      <span class="pb-2 text-8xl">220</span>
                      <span class="text-sm pt-12 font-semibold leading-6 tracking-wide text-gray-600">EUR</span>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-white rounded-xl dark:bg-gray-900">
          <div class="w-full px-6 py-8 rounded-xl  lg:pb-24 lg:px-6 " id="česta-pitanja">
            <h2
              class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
              Često postavljana pitanja</h2>
            <div class="max-w-screen-md mx-auto">
              <div id="accordion-flush" data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h3 id="accordion-flush-heading-1">
                  <button type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                    aria-controls="accordion-flush-body-1">
                    <span>Koliko je vremena potrebno da se izradi web stranica za moju taxi službu?</span>
                    <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                      viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </h3>
                <div id="accordion-flush-body-1" class="" aria-labelledby="accordion-flush-heading-1">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Izrada vaše web stranice traje 1 - 3 dana.
                    </p>
                    <p class="text-gray-500 dark:text-gray-400">Ukoliko zahtjev za domenu prođe isti dan, Vaš web može
                      biti
                      dovršen i dostupan<a href="#" class="text-blue-600 dark:text-blue-500 hover:underline"> unutar
                        24 sata</a>. </p>
                  </div>
                </div>
                <h3 id="accordion-flush-heading-2">
                  <button type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
                    aria-controls="accordion-flush-body-2">
                    <span>Što kada prođe godinu dana?</span>
                    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </h3>
                <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Ukoliko želite da se stranica
                      i dalje prikazuje na internetu, vašu domenu i hosting će
                      trebati produžiti.</p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Hyperlink će Vas kontaktirati 30 dana prije isteka
                      za upit o produživanju.</p>
                  </div>
                </div>
                <h3 id="accordion-flush-heading-3">
                  <button type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
                    aria-controls="accordion-flush-body-3">
                    <span>Koliko košta produživanje domene?</span>
                    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </h3>
                <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Produživanje domene će vas koštati 20€ za narednu
                      godinu.</p>
                  </div>
                </div>
                <h3 id="accordion-flush-heading-4">
                  <button type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-4" aria-expanded="false"
                    aria-controls="accordion-flush-body-4">
                    <span>Koliko košta produživanje hostinga?</span>
                    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </h3>
                <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="text-gray-500 dark:text-gray-400">Produživanje hostinga će vas koštati 30€ za narednu
                      godinu.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>


    <section class="bg-white dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-screen-sm mx-auto text-center">
          <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Što je
            Hyperlink?</h2>
          <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Hyperlink je novoosnovana firma koja se
            bavi digitalizacijom poslovanja mikro, malih i srednjih poduzetnika.</p>
          <a href="tel:+385992053344"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Nazovite
            nas</a>
        </div>
      </div>
    </section>
    <!-- End block -->
  </body>
</template>
<script setup>

//USER DATA
const taxiName = "Taxi Poreč"
const taxiCity = "Poreč"
const taxiUrl = "taxiporeč.hr"
const taxiNumber = "385989937263"



import { ref } from "vue";
import { onMounted } from "vue";
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

// initialize components based on data attribute selectors
onMounted(() => {
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

useHead({
  title: "Poduke Parallel",
  meta: [
    {
      name: "description",
      content:
        "Učenje bez muke, uz Parallel poduke! Unaprijedite svoje učenje kroz naše iskustvo, poticaj i konstantnu podršku. Održavamo instrukcije iz svih obaveznih i velikog broja stručnih predmeta. Uspješno savladajte gradivo neophodno za polaganje državne mature uz Parallel poduke!",
    },
  ],
  bodyAttrs: {
    class: "",
  },
  script: [],
});

useSeoMeta({
  title: "Poduke Parallel",
  ogTitle: "Poduke Parallel",
  description:
    "Učenje bez muke, uz Parallel poduke! Unaprijedite svoje učenje kroz naše iskustvo, poticaj i konstantnu podršku. Održavamo instrukcije iz svih obaveznih i velikog broja stručnih predmeta. Uspješno savladajte gradivo neophodno za polaganje državne mature uz Parallel poduke!",
  ogDescription:
    "Učenje bez muke, uz Parallel poduke! Unaprijedite svoje učenje kroz naše iskustvo, poticaj i konstantnu podršku. Održavamo instrukcije iz svih obaveznih i velikog broja stručnih predmeta. Uspješno savladajte gradivo neophodno za polaganje državne mature uz Parallel poduke!",
  ogImage: "../../assets/img/ogpoduke.jpeg",
  twitterCard: "../../assets/img/ogpoduke.jpeg",
});

// initialize components based on data attribute selectors
onMounted(() => {
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
</script>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");

.scroll-to-top {
  position: absolute;
  right: 15px;
  bottom: 15px;
  display: none;
  width: 50px;
  height: 50px;
  text-align: center;
  color: #fff;
  background: rgba(52, 58, 64, 0.5);
  line-height: 50px;
}

.scroll-to-top:focus,
.scroll-to-top:hover {
  color: #fff;
}

.scroll-to-top:hover {
  background: #343a40;
}

.scroll-to-top i {
  font-weight: 800;
}

.gradient {
  background: #e6dada;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #274046, #e6dada);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #274046, #e6dada);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

html {
  background: linear-gradient(90deg, #00a2fffb 0%, rgb(0, 186, 149) 100%);
}
</style>
