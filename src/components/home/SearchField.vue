<template>
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
</template>
