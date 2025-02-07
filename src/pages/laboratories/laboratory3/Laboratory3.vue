<script setup lang="ts">
import LinkButton from "@/components/LinkButton.vue";
import UH1 from "@/components/UH1.vue";
import UHeader from "@/components/UHeader.vue";
import UMain from "@/components/UMain.vue";
import UPage from "@/components/UPage.vue";
import { ref } from "vue";

const count = ref(0);
const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};
</script>

<template>
  <UPage>
    <UHeader />
    <UMain>
      <div class="text-center my-10">
        <h2 class="text-2xl text-accent">Лабораторная работа #3</h2>
      </div>
      <div class="flex flex-col gap-2 w-full justify-center items-center">
        <div class="flex gap-4 items-center">
          <button
            @click="decrement"
            class="size-10 rounded-lg bg-red-400 text-white"
          >
            -
          </button>
          <span>{{ count }}</span>
          <button
            @click="increment"
            class="size-10 rounded-lg bg-green-400 text-white"
          >
            +
          </button>
        </div>
      </div>
    </UMain>
  </UPage>
</template>
