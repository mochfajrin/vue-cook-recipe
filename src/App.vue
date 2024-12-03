<script setup lang="ts">
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
</script>

<template>
  <div
    class="flex flex-col m-2 gap-2 overflow-hidden h-screen text-secondary-color lg:flex-row md:flex-col"
  >
    <header class="flex-initial bg-white overflow-hidden p-5 rounded lg:w-72 md:w-full md:">
      <NavbarComponent />
    </header>
    <main class="flex-initial w-full bg-white overflow-hidden py-16 px-12 rounded">
      <section id="search" class="flex flex-col w-full justify-center items-center gap-6">
        <a href="/">
          <img class="w-60" src="/assets/logo.png" alt="Cookpad Logo" />
        </a>
        <div class="flex gap-2 justify-center w-full">
          <div class="border-black border-solid border-[0.5px] px-3 py-2 rounded-lg">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            <input
              class="ml-2 w-96 px-2 py-1 focus:outline-none placeholder:text-secondary-color"
              type="text"
              placeholder="Search by recipe or ingredients"
            />
          </div>
          <button class="font-bold bg-primary-color text-white px-5 py-1 rounded-md">Search</button>
        </div>
      </section>
      <section id="banner" class="mt-16">
        <img
          class="w-full h-[218px] object-contain bg-black"
          src="/assets/img/web/banner.webp"
          alt="banner"
        />
      </section>
      <footer>footer</footer>
    </main>
  </div>
</template>
