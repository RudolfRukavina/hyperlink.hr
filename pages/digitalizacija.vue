<template>

  <Head>
    <Title>Hyperlink - Digitalizacija</Title>
    <Meta name="description"
      content="Najpovoljniji najam putničkih kombi vozila (8+1 sjedala) i automobila u Primorsko-goranskoj županiji! Otvoreni smo 24 sata svaki dan." />
    <Style type="text/css" />
  </Head>
  <!--Hero-->

  <body class="leading-normal tracking-normal text-white bg-white" style="font-family: 'Source Sans Pro', sans-serif">
    <section class="content-section bg-white py-16 -my-[1px]" id="businesses">
      <div class="container mx-auto px-4 lg:px-5">
        <h2 class="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
          Digitalizacija poslovanja po vrsti poslovanja
        </h2>
        <h2 class="w-full my-2 text-base font-bold leading-tight text-center text-gray-800">
          Klikom na sekciju otvarate daljnje informacija o uslugama koje se nude
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="col-span-1 lg:col-span-1">
            <NuxtLink class="portfolio-item block relative" to="/frizerski">
              <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity lg:opacity-0 hover:opacity-100">
                <div class="caption absolute inset-0 flex items-center justify-center">
                  <div class="text-white text-center">
                    <div class="text-2xl">Frizerski salon | Salon ljepote</div>
                  </div>
                </div>
              </div>
              <img class="object-cover w-full h-full"
                src="https://static.vecteezy.com/system/resources/previews/014/019/052/original/hair-salon-with-hairdresser-haircut-haircare-and-hairstyle-in-beauty-salon-or-barber-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg"
                alt="..." />
            </NuxtLink>
          </div>
          <div class="col-span-1 lg:col-span-1">
            <NuxtLink class="portfolio-item block relative" to="/teretana">
              <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity lg:opacity-0 hover:opacity-100">
                <div class="caption absolute inset-0 flex items-center justify-center">
                  <div class="text-white text-center">
                    <div class="text-2xl">Teretana | Fitness centar</div>
                  </div>
                </div>
              </div>
              <img class="object-cover w-full h-full"
                src="https://img.freepik.com/premium-vector/fitness-typographic-header-workout-gym-with-professional-instructor_277904-15080.jpg"
                alt="..." />
            </NuxtLink>
          </div>

          <div class="col-span-1 lg:col-span-1">
            <NuxtLink class="portfolio-item block relative" to="/taxi">
              <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity lg:opacity-0 hover:opacity-100">
                <div class="caption absolute inset-0 flex items-center justify-center">
                  <div class="text-white text-center">
                    <div class="text-2xl">Taxi služba</div>
                  </div>
                </div>
              </div>
              <img class="object-cover w-full h-full"
                src="https://img.freepik.com/free-vector/young-family-with-baggage-taking-taxi-airport_74855-11291.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708041600&semt=ais"
                alt="..." />
            </NuxtLink>
          </div>
          <div class="col-span-1 lg:col-span-1">
            <NuxtLink class="portfolio-item block relative" to="/caffe">
              <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity lg:opacity-0 hover:opacity-100">
                <div class="caption absolute inset-0 flex items-center justify-center">
                  <div class="text-white text-center">
                    <div class="text-2xl">Ugostiteljski objekt - Caffe bar</div>
                  </div>
                </div>
              </div>
              <img class="object-cover w-full h-full"
                src="https://img.freepik.com/free-vector/coffee-shop-building-concept-illustration_114360-15917.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1710201600&semt=ais"
                alt="..." />
            </NuxtLink>
          </div>
          <div class="col-span-1 lg:col-span-1">
            <NuxtLink class="portfolio-item block relative" to="/restoran">
              <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity lg:opacity-0 hover:opacity-100">
                <div class="caption absolute inset-0 flex items-center justify-center">
                  <div class="text-white text-center">
                    <div class="text-2xl">Ugostiteljski objekt - Restoran</div>
                  </div>
                </div>
              </div>
              <img class="object-cover w-full h-full"
                src="https://img.freepik.com/premium-vector/isometric-restauran-with-buyers_32192-190.jpg?w=2000"
                alt="..." />
            </NuxtLink>
          </div>
          <div class="col-span-1 lg:col-span-1">
            <NuxtLink class="portfolio-item block relative" to="/rent">
              <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity lg:opacity-0 hover:opacity-100">
                <div class="caption absolute inset-0 flex items-center justify-center">
                  <div class="text-white text-center">
                    <div class="text-2xl">Rent a car | Rent a van</div>
                  </div>
                </div>
              </div>
              <img class="object-cover w-full h-full"
                src="https://img.freepik.com/premium-vector/concept-car-rental-service-via-smartphone-female-employee-handing-keys-male-customer_357257-1075.jpg"
                alt="..." />
            </NuxtLink>
          </div>


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
