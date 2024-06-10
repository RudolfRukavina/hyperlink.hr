<template>
  <nav class="bg-white">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <NuxtLink to="/izbornik" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/img/hplink.webp" alt="" class="w-32" />
      </NuxtLink>
      <div class="flex items-center space-x-6 rtl:space-x-reverse">
        <a href="mailto:rukavina.rudi@gmail.com"
          class="text-3xl px-3 rounded-xl text-black bg-gray-50 hover:bg-gray-200 hover:shadow-sm"><i
            class="fa fa-envelope"></i></a>
        <a href="tel:+385992053344"
          class="text-3xl px-3 rounded-xl text-black bg-green-200 hover:bg-green-400 hover:shadow-sm"><i
            class="fa fa-phone"></i></a>
      </div>
    </div>
  </nav>
  <nav class="bg-gray-50 shadow-xl overflow-x-auto text-nowrap whitespace-nowrap px-5">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <li>
            <NuxtLink to="/izbornik" class="text-gray-900 hover:underline">Izbornik
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
</script>

<style scoped>
.router-link-exact-active {
  color: rgb(28, 28, 28);
  font-weight: 600;
}
</style>
