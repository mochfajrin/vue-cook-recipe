<script setup lang="ts">
import NavbarComponent from './components/navbar/NavbarComponent.vue'
</script>

<template>
  <div
    class="flex flex-col m-2 gap-2 overflow-hidden h-screen text-slate-600 lg:flex-row md:flex-col"
  >
    <header class="flex-initial bg-white overflow-hidden p-5 rounded lg:w-72 md:w-full md:">
      <NavbarComponent />
    </header>
    <main class="flex-initial w-full bg-white overflow-hidden p-5 rounded">
      <section><p class="">main</p></section>
      <footer>footer</footer>
    </main>
  </div>
</template>
