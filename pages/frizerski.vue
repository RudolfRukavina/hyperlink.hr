<template>

  <Head>
    <Title>Hyperlink - Frizerski salon</Title>
    <Meta name="description"
      content="Najpovoljniji najam putničkih kombi vozila (8+1 sjedala) i automobila u Primorsko-goranskoj županiji! Otvoreni smo 24 sata svaki dan." />
    <Style type="text/css" />
  </Head>
  <!--Hero-->

  <body class="leading-normal tracking-normal text-white bg-white" style="font-family: 'Source Sans Pro', sans-serif">
    <section class="content-section bg-white py-16 -my-[1px]" id="businesses">
      <div class="container mx-auto px-4 lg:px-5">
        <h2 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Frizerski salon | Salon Ljepote
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p class='text-xl text-center w-full px-5'>Digitalizacija poslovanja frizerskih salona
          <br>
          - Osnovna web stranica (1-4 stranice)
          <br>
          - Rezervacijski sistem (Napredna web stranica)
          <br>

          - Instrukcije i pomoć s vođenjem društvenih mreža
          <br>

          - Instrukcije i pomoć s google oglašavanjem
          <br>
          - Razvoj dizajna logotipa
          <br>
          - Razvoj dizajna i provedba izrade letaka
          <br>
          - Razvoj dizajna i provedba izrade vizitki
          <br>

          ⁃ U ponudi dobivate i službeni uređaj, Samsung Galaxy Tab A7 Tablet kao uređaj za pregled i upravljanje
          rezervacijskim sistemom
          <br>
        </p>
        <p class='text-bold mt-10 px-3'>Za Vas kao frizerski salon u ponudi imam uslugu “Digitalizacija poslovanja
          frizerskih
          salona” koji se sastoji
          od izrade originalne izrađene po mjeri napredne web stranice s rezervacijskim sistemom, s uključenom podrškom
          u
          unaprijeđenju poslovanja.
          To se odnosi na instrukcije i pomoć s vođenjem društvenih mreža, Google oglašavanjem, i mnogo više…
          Ukoliko još uvijek nemate ili biste htjeli novi logotip, vizitke ili letke, također je uključena provedba
          razvoja dizajna i izrada.

          Provedba digitalizacije se odvija u roku od mjesec dana, te u tom periodu vremena mi kao tim razrađujemo vašu
          digitalnu prisutnost s ciljem da dignemo vaše poslovanje na optimalnu razinu.</p>
        <a href='https://www.gentlemensshop.hr/booking/#!/1' target='_blank'
          class='text-xl mt-5 px-3 text-blue-600'>Primjer
          rezervacijskog sistema za frizere.</a>

        <p class='text-xl mt-5 px-3 font-bold'>Pričamo o iznosu projekta od 3600€ od kojeg vaučer za digitalizaciju može
          pokriti 60% troška, te bi krajnji trošak projekta bio 1440€.
        </p>
      </div>
    </section>
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
