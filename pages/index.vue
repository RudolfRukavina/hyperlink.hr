<template>

  <Head>
    <Title>Hyperlink - Taxi služba</Title>
    <Meta name="description"
      content="Najpovoljniji najam putničkih kombi vozila (8+1 sjedala) i automobila u Primorsko-goranskoj županiji! Otvoreni smo 24 sata svaki dan." />
    <Style type="text/css" />
  </Head>
  <!--Hero-->


  <body class="leading-normal tracking-normal text-white bg-white" style="font-family: 'Source Sans Pro', sans-serif">

    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row  mt-20 items-center">
      <div class="w-full md:w-2/5 flex justify-center py-6 mb-10 text-center">
        <img class="rounded-xl md:w-4/5"
          src="https://img.freepik.com/free-vector/young-family-with-baggage-taking-taxi-airport_74855-11291.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708041600&semt=ais"
          alt="" />
      </div>
      <div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">

        <h1 class="mb-4 text-3xl md:text-7xl text-black drop-shadow-md font-bold text-center leading-tight w-full">
          Taxi služba - Otkrijte svoj
          <span class="text-rose-600 drop-shadow-md">
            digitalni potencijal
          </span>

        </h1>
        <p class="text-gray-500 text-base font-semibold font-sans mx-5">
          Hyperlink Software Development pomaže znatiželjnim vlasnicima tvrtki
          otkriti digitalne mogućnosti njihovog poslovanja i procijeniti
          je li
          <span class="text-rose-500 drop-shadow-md">pravo vrijeme za digitalizaciju.</span>
        </p>
        <p class="text-gray-500 text-base font-semibold font-sans mx-5 mt-4">
          Želite bolje poslovati te doprijeti do više klijenata? Mi znamo što Vama treba. Vi ste jednostavna taxi
          služba, i svjesni ste da Vam ne treba napredan sistem i web stranica da bi bolje poslovali. Vama samo treba
          još jedna poveznica kako bi ljudi lako i efikasno došli do usluge koja njima treba - Taxi prijevoz. Za Vas u
          ponudi imamo jedinstvenu promotivnu akciju izrade moderne, višejezične web stranice po povoljnoj cijeni od 440
          Eura. Povodom otvorenja Hyperlink Software Development-a, prvih 10 klijenata također dobivaju jedinstveni
          popust od 50%. U nastavku možete vidjeti da se stranica sastoji od moderne višejezične web stranice, na vašoj
          vlastitoj domeni, s već uračunatim hostingom u trajanju od 1 godine.
          <span class="text-orange-500 drop-shadow-md">Investicija u web stranicu nikada nije bila ovako
            isplativa.</span>
        </p>
        <div class="w-full flex justify-center my-2">
          <NuxtLink to="#businesses"
            class="mx-3 hover:underline bg-rose-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Otkrij
          </NuxtLink>
          <a href='tel:+385992053344'
            class="mx-3 hover:underline bg-rose-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Nazovite nas!
          </a>
        </div>
      </div>
    </div>
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center mb-5">
      <div class="flex flex-col w-full md:w-5/5 justify-center items-center mt-16 text-center md:text-left">
        <p>Prezentacijska stranica za proizvod - Web stranica taxi službe</p>
        <img src="../assets/img/hplink.webp" alt="" class="w-96" />

        <p class="text-gray-800 w-full text-center mt-2 text-xl ">
          vl. <span class='font-semibold drop-shadow-lg text-2xl'>Rudolf Rukavina</span>
        </p>
      </div>
    </div>
    <section class="container mx-auto px-10 text-center py-1 pb-10" id="radnovrijeme">
      <a href="tel:+385992053344">
        <button
          class="mx-3 hover:underline bg-rose-700 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Nazovite nas!
        </button>
      </a>
    </section>
    <div class='flex justify-center'>
      <img src='../assets/img/racuntaxiweb.png' class="lg:w-3/4" />
    </div>
    <a href="/invoice.pdf" class=' flex justify-center'>
      <button type="button"
        class="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>

        <span class="ml-2">Download</span>
      </button>
    </a>
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
