<template>

  <Head>
    <Title>Hyperlink - Pisma namjere</Title>
    <Meta name="description"
      content="Najpovoljniji najam putničkih kombi vozila (8+1 sjedala) i automobila u Primorsko-goranskoj županiji! Otvoreni smo 24 sata svaki dan." />
    <Style type="text/css" />
  </Head>
  <!--Hero-->

  <body class="leading-normal tracking-normal text-white bg-white" style="font-family: 'Source Sans Pro', sans-serif">
    <hr />
    <div class="w-full text-center my-5">
      <p class="text-3xl">
        🟢 Obavljeno -
        <span class="font-bold"> Parallel j.d.o.o.</span>
      </p>
      <a class="mx-5 text-blue-600 underline" href="/ParallelPotpisan-PN.pdf" download>Download</a>
      <a class="mx-5 text-blue-600 underline" href="/ParallelPotpisan-PN.pdf" target="_blank">Preview</a>
    </div>
    <hr />
    <div class="w-full text-center my-5">
      <p class="text-3xl">
        🟡 Poslano - Čeka se potpis -
        <span class="font-bold">Taxi Opatija, Obrt za usluge</span>
      </p>
      <a class="mx-5 text-blue-600 underline" href="/TaxiOpatija-PN.pdf" download>Download</a>
      <a class="mx-5 text-blue-600 underline" href="/TaxiOpatija-PN.pdf" target="_blank">Preview</a>
    </div>
    <hr />
    <div class="w-full text-center my-5">
      <p class="text-3xl">
        🟡 Poslano - Čeka se potpis -
        <span class="font-bold">Kvarner Tours j.d.o.o.</span>
      </p>
      <a class="mx-5 text-blue-600 underline" href="/KvarnerTours-PN.pdf" download>Download</a>
      <a class="mx-5 text-blue-600 underline" href="/KvarnerTours-PN.pdf" target="_blank">Preview</a>
    </div>
    <hr />
    <div class="w-full text-center my-5">
      <p class="text-3xl">
        🟢 Obavljeno - <span class="font-bold">ID90 d.o.o.</span>
      </p>
      <a class="mx-5 text-blue-600 underline" href="/ID90Potpisan-PN.pdf" download>Download</a>
      <a class="mx-5 text-blue-600 underline" href="/ID90Potpisan-PN.pdf" target="_blank">Preview</a>
    </div>
    <hr />
    <div class="w-full text-center my-5">
      <p class="text-3xl">
        🟡 Poslano - Čeka se potpis -
        <span class="font-bold">Aquarius d.o.o.</span>
      </p>
      <a class="mx-5 text-blue-600 underline" href="/Aquarius3000-PN.pdf" download>Download</a>
      <a class="mx-5 text-blue-600 underline" href="/Aquarius3000-PN.pdf" target="_blank">Preview</a>
    </div>
    <hr />
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
