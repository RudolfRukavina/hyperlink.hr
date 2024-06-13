<template>
  <div>
    <!-- Conditional rendering for header -->
    <header v-if="!excludeHeaderAndFooter" class="sticky top-0 z-50">
      <Navbar />
    </header>

    <slot></slot>

    <!-- Conditional rendering for footer -->
    <Footer v-if="!excludeHeaderAndFooter" />
  </div>
</template>

<script setup>
// Import the required components
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

// Define the routes that should exclude header and footer
const excludedRoutes = ['/taxivrsar'] // Add your specific route paths here

// Get the current route
const route = useRoute()

// Determine if the header and footer should be excluded
const excludeHeaderAndFooter = ref(excludedRoutes.includes(route.path))
</script>
