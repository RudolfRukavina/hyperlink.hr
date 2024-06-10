<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8" id='izbornik'>
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6 text-black">
          <NuxtLink class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="/">
            <img src="../assets/img/hplink.webp" alt="" class="w-32  inline-block me-3 rounded-xl">

          </NuxtLink>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-900 drop-shadow-md font-semibold md:mb-6">Hyperlink</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Naslovnica
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/mojeinformacije" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Moje informacije
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/certifikati" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Certifikati
              </NuxtLink>
            </li>

            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/digitalizacija" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Usluge digitalizacije poslovanja</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-900 drop-shadow-md font-bold underline md:mb-6">Sva potrebna dokumentacija</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="https://docs.google.com/document/d/13h_z4B6Vim6PfKKfmKcoRmPSJGL_7hXJ/edit?usp=sharing&ouid=116829830610241773861&rtpof=true&sd=true"
                target='_blank' class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                🟢 Ispunjeni opći podaci
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/Elektronicki_zapis.pdf" target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                🟢 E-radna knjižica
              </NuxtLink>
            </li>

            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/potpore" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                🟢 Oprema do 10,000€</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/pismanamjere" class=" no-underline hover:underline text-gray-800 hover:text-pink-500">
                🟡 Pisma namjere</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="/rudolfrukavinasvjedodzba.pdf" target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                🟢 Preslika diplome</a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-900 drop-shadow-md font-semibold md:mb-6">Usluge digitalizacije poslovanja</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/frizerski" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Frizerski salon
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/teretana" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Teretana
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/taxi" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Taxi
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/caffe" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Caffe bar
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/restoran" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Restoran
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/rent" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Rent a car/van
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-900 drop-shadow-md font-semibold md:mb-6">Usluge digitalnih memorijala</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/izbornik" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Izrada web biografije pokojnika
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/izbornik" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                -QR kod na nadgrobnoj ploči
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/izbornik" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                -Ugravirani QR kod na nadgrobnoj ploči
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/izbornik" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                -NFC čip (Na dodir telefonom) na nadgrobnoj ploči
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/izbornik" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Snimanje videozapisa - poruka svijetu prije smrti
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-900 drop-shadow-md font-semibold md:mb-6">Marketing</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/digitalizacija" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Izrada | Instrukcije i pomoć s vođenjem društvenih mreža
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/digitalizacija" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Izrada | Instrukcije i pomoć s google oglašavanjem
              </NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/digitalizacija" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Izrada | Instrukcije i pomoć s facebook oglašavanjem
              </NuxtLink>
            </li>

            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/digitalizacija" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Izrada kratkih glazbenih videa
              </NuxtLink>
            </li>

          </ul>
        </div>

        <div class="flex-1">
          <p class="uppercase text-gray-900 drop-shadow-md font-semibold md:mb-6">Grafički dizajn</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/digitalizacija" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Razvoj dizajna logotipa</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/digitalizacija" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Razvoj dizajna i provedba izrade
                letaka</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/digitalizacija" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Razvoj dizajna i provedba izrade
                vizitki</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/googlereviewcard" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Razvoj dizajna i provedba izrade
                povezanih QR kodova</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/googlereviewcard" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Razvoj dizajna i provedba izrade
                google review kartica</NuxtLink>
            </li>

          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-900 drop-shadow-md font-semibold md:mb-6">Očekivanja i predviđanja</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/2024" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Za
                2024. godinu</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/2025" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Za
                2025. godinu</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/2026" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Za
                2026. godinu</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/2027" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Za
                2027. godinu</NuxtLink>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/2028" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Za
                2028. godinu</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>