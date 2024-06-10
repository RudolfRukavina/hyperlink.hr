<template>

  <Head>
    <Title>Hyperlink - Moje informacije</Title>
    <Meta name="description"
      content="Najpovoljniji najam putničkih kombi vozila (8+1 sjedala) i automobila u Primorsko-goranskoj županiji! Otvoreni smo 24 sata svaki dan." />
    <Style type="text/css" />
  </Head>
  <!--Hero-->

  <body class="leading-normal tracking-normal text-white bg-white" style="font-family: 'Source Sans Pro', sans-serif">
    <div class="pt-10 py-2 mx-1" id="naslovnica">
      <section class="content-section bg-white -my-[1px]" id="usluge">
        <div class="container mx-auto px-4 lg:px-5">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Moje informacije
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </div>
      </section>
      <div class="relative overflow-x-auto">
        <div class="flex flex-col">
          <div class="flex flex-row border-b dark:border-gray-700">
            <span class="w-1/3 px-6 py-3 font-medium text-black dark:text-white">Ime</span>
            <span class="w-2/3 px-6 py-3 text-black dark:text-white">Rudolf</span>
          </div>
          <div class="flex flex-row border-b dark:border-gray-700">
            <span class="w-1/3 px-6 py-3 font-medium text-black dark:text-white">Prezime</span>
            <span class="w-2/3 px-6 py-3 text-black dark:text-white">Rukavina</span>
          </div>
          <div class="flex flex-row border-b dark:border-gray-700">
            <span class="w-1/3 px-6 py-3 font-medium text-black dark:text-white">OIB</span>
            <span class="w-2/3 px-6 py-3 text-black dark:text-white">46621560980</span>
          </div>
          <div class="flex flex-row border-b dark:border-gray-700">
            <span class="w-1/3 px-6 py-3 font-medium text-black dark:text-white">Zanimanje</span>
            <span class="w-2/3 px-6 py-3 text-black dark:text-white">Tehničar za el. strojeve s primjenjenim
              računalstvom</span>
          </div>
          <div class="flex flex-row border-b dark:border-gray-700">
            <span class="w-1/3 px-6 py-3 font-medium text-black dark:text-white">Datum rođenja</span>
            <span class="w-2/3 px-6 py-3 text-black dark:text-white">18.09.1998.</span>
          </div>
          <div class="flex flex-row border-b dark:border-gray-700">
            <span class="w-1/3 px-6 py-3 font-medium text-black dark:text-white">Adresa prebivališta</span>
            <span class="w-2/3 px-6 py-3 text-black dark:text-white">Stupari 24, Viškovo, Rijeka</span>
          </div>
          <div class="flex flex-row border-b dark:border-gray-700">
            <span class="w-1/3 px-6 py-3 font-medium text-black dark:text-white">Email</span>
            <span class="w-2/3 px-6 py-3 text-black dark:text-white">rukavina.rudi@gmail.com</span>
          </div>
          <div class="flex flex-row">
            <span class="w-1/3 px-6 py-3 font-medium text-black dark:text-white">Telefon</span>
            <span class="w-2/3 px-6 py-3 text-black dark:text-white">+385 99 205 3344</span>
          </div>
        </div>

      </div>
    </div>
  </body>
</template>
<script setup>
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
  ogImage: "../assets/img/ogpoduke.jpeg",
  twitterCard: "../assets/img/ogpoduke.jpeg",
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
