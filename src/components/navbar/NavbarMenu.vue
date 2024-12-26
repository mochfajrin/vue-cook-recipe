<script setup lang="ts">
import { navbarMenuList } from '@/config/navbar.config'
import { recipeCollectionMenuList } from '@/config/navbar.config'
import NavbarMenuListIcon from '@/components/navbar/NavbarMenuListIcon.vue'
</script>
<template>
  <div id="nav-menu">
    <ul>
      <li class="lg:my-5" v-for="(item, i) in navbarMenuList" :key="i">
        <NavbarMenuListIcon v-bind="item" />
      </li>
      <li>
        <div>
          <p class="text-lg">
            <font-awesome-icon class="mr-4" icon="fa-solid fa-book-bookmark" />Your Collection
          </p>
          <div class="flex items-center p-3 gap-2 bg-gray-50 h-12 my-5 overflow-hidden">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            <input
              class="bg-gray-50 p-2 w-full text-black placeholder:text-secondary-color focus:outline-none"
              type="text"
              placeholder="Search in your collection"
            />
          </div>
          <ul>
            <li class="lg:my-5 lg:ml-3" v-for="(item, i) in recipeCollectionMenuList" :key="i">
              <NavbarMenuListIcon v-bind="item" />
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
