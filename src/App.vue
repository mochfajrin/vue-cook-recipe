<script setup lang="ts">
import NavigationBar from '@/components/navbar/NavigationBar.vue'
import SearchField from '@/components/home/SearchField.vue'
import BannerImage from '@/components/home/BannerImage.vue'
import BaseFooter from '@/components/footer/BaseFooter.vue'
</script>

<template>
  <div
    class="flex flex-col m-2 gap-2 overflow-hidden h-fit text-secondary-color lg:flex-row md:flex-col"
  >
    <header class="flex-initial bg-white overflow-hidden p-5 rounded lg:w-72 md:w-full md:">
      <navigation-bar />
    </header>
    <main class="flex-initial w-full bg-white overflow-hidden rounded">
      <div class="pt-16 px-12">
        <search-field />
        <banner-image />
        <section id="newestRecipe" class="my-7">
          <h2 class="font-semibold my-2">Newest Recipe</h2>
          <div id="cardContainer" class="flex flex-wrap w-full justify-between">
            <div
              v-for="(item, index) in 8"
              :key="index"
              id="card"
              class="overflow-hidden border-solid border-black shadow-md rounded w-[24%] my-1"
            >
              <div class="relative w-full text-white">
                <img class="w-full h-40 object-cover" src="/assets/img/potato.webp" alt="" />
                <div class="absolute bottom-2 p-2 mt-2 w-full">
                  <p class="font-bold text-xl">Potato</p>
                  <div class="flex justify-between">
                    <div class="flex flex-row gap-1">
                      <img
                        class="w-5 h-5 rounded-xl object-cover"
                        src="/assets/img/profile.png"
                        alt=""
                      />
                      <p class="text-sm">User10</p>
                    </div>
                    <button>
                      <font-awesome-icon icon="fa-regular fa-bookmark" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <p class="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim nulla
                  possimus, ducimus unde aliquid rem vel voluptatibus, quis excepturi voluptatem
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <base-footer />
    </main>
  </div>
</template>
