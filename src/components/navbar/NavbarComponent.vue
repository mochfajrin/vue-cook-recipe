<script setup lang="ts">
import NavbarMenu from '@/components/navbar/NavbarMenu.vue'
</script>
<template>
  <nav>
    <div id="logo" class="flex justify-between items-center">
      <div class="icon text-green-600">
        <h2 class="flex items-center font-bold text-xl">
          <font-awesome-icon class="h-10" icon="fa-brands fa-vuejs" />Cookpad
        </h2>
      </div>
      <button><font-awesome-icon class="text-black" icon="fa-solid fa-angles-left" /></button>
    </div>
    <NavbarMenu />
  </nav>
</template>
