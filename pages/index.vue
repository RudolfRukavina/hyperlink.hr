<template>

  <Head>
    <Title>Hyperlink - Naslovnica</Title>
    <Meta name="description"
      content="Najpovoljniji najam putničkih kombi vozila (8+1 sjedala) i automobila u Primorsko-goranskoj županiji! Otvoreni smo 24 sata svaki dan." />
    <Style type="text/css" />
  </Head>
  <!--Hero-->

  <body class="leading-normal tracking-normal  bg-white" style="font-family: 'Source Sans Pro', sans-serif">
    <div class="pt-10 py-2 mx-1">

      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center mb-5">
        <div class="flex flex-col w-full md:w-5/5 justify-center items-center mt-16 text-center md:text-left">
          <p>Priprema za poticaje i nastanak</p>
          <img src="../assets/img/hplink.webp" alt="" class="w-96" />
          <p class="text-gray-800 w-full text-center mt-2 text-xl font-semibold drop-shadow-lg">
            Obrta za računalno programiranje
          </p>

          <p class="text-gray-800 w-full text-center mt-2 text-xl ">
            vl. <span class='font-semibold drop-shadow-lg text-2xl'>Rudolf Rukavina</span>
          </p>
        </div>
      </div>
      <section class="container mx-auto px-10 text-center py-1 pb-10" id="radnovrijeme">
        <a href="tel:+385992053344">
          <button
            class="mx-3 hover:underline bg-rose-700 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Nazovite me!
          </button>
        </a>
      </section>
      <hr />
      <section>
        <h2 class="w-full my-2 mt-20 text-4xl font-bold leading-tight px-5 text-center text-gray-800">
          Zelena i digitalna tranzicija
        </h2>
        <h2 class="w-full my-2 text-base font-bold leading-tight px-2 text-center text-gray-800">
          Moja uloga je digitalizirati mikro, male i srednje poduzetnike u Hrvatskoj prema viziji <a
            href='https://hrvatska2030.hr/' target='_blank' class='text-blue-600 underline'>Digitalna Hrvatska
            2030.</a>
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row  mt-20 items-center">
          <div class="w-full md:w-2/5 flex justify-center py-6 mb-10 text-center">
            <img class="rounded-xl md:w-4/5" src="../assets/img/hyperlinkhero.svg" alt="" />
          </div>
          <div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">

            <h1 class="mb-4 text-3xl md:text-7xl text-black drop-shadow-md font-bold text-center leading-tight w-full">
              Discover
              <span class="text-rose-600 drop-shadow-md">
                the digital potential
              </span>
              of your business
            </h1>
            <p class="text-gray-500 text-base font-semibold font-sans mx-5">
              Hyperlink Software Development helps curious business owners
              discover the digital capability of their business and evaluates
              whether
              <span class="text-rose-500 drop-shadow-md">it's the right time for digitalization.</span>
            </p>
            <p class="text-gray-500 text-base font-semibold font-sans mx-5 mt-4">
              Millions of individuals invest significant time and resources in
              repetitive tasks, often due to a lack of essential information and
              technology. Our expert guidance, tailored asessments, personalized
              solutions, timely evaluations, and proven success in unlocking
              businesses' digital potential make it worthwhile for us to come
              together around shared interests,
              <span class="text-orange-500 drop-shadow-md">improving how we do the jobs we love.</span>
            </p>
            <div class="w-full flex justify-center my-2">
              <NuxtLink to="#businesses"
                class="mx-3 hover:underline bg-rose-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Discover
              </NuxtLink>
              <a href='tel:+385992053344'
                class="mx-3 hover:underline bg-rose-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Make a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section>
      <h2 class="w-full my-2 mt-20 text-4xl font-bold leading-tight px-5 text-center text-gray-800">
        Vaucheri za digitalizaciju
      </h2>
      <h2 class="w-full my-2 text-base font-bold leading-tight px-2 text-center text-gray-800">
        Planiram zahtijevati vauchere za digitalizaciju, ako još uvijek budu
        dostupni.
      </h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center mb-32">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-center mt-16 text-center md:text-left">
          <img src="../assets/img/hplink.webp" alt="" class="w-92" />
          <p class="text-gray-800 w-full text-center mt-2 text-xl font-semibold drop-shadow-lg">
            Obrt za računalno programiranje
          </p>
        </div>
        <div class="flex flex-col w-full md:w-1/5 justify-center items-center mt-16 text-center md:text-left">
          <h1
            class="text-3xl underline-offset-8 md:text-8xl text-black drop-shadow-lg font-bold text-center leading-tight w-full">
            +
          </h1>
        </div>
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <img class="rounded-xl my-2 md:w-full" src="../assets/img/eufondovi.jpeg" alt="" />
        </div>
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
