<script setup lang="ts">
import UHeader from "@/components/UHeader.vue";
import UMain from "@/components/UMain.vue";
import UPage from "@/components/UPage.vue";
import { onMounted } from "vue";

onMounted(() => {
  const circle2 = document.getElementById("circle2");

  let start: number;

  function animate(timestamp: number) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const translateX = Math.cos(progress / 500) * 200;
    circle2!.style.transform = `translateX(${translateX}px)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
</script>

<template>
  <UPage>
    <UHeader />
    <UMain>
      <div class="text-center my-10">
        <h2 class="text-2xl text-accent">Лабараторная работа #4</h2>
      </div>
      <div class="flex flex-col gap-10 w-full">
        <div
          class="size-20 rounded-full bg-red-200 animate-css"
          id="circle1"
        ></div>
        <div class="size-20 rounded-full bg-red-200" id="circle2"></div>
      </div>
    </UMain>
  </UPage>
</template>

<style>
@keyframes bounce {
  0%,
  100% {
    transform: translateX(0);
    background-color: gray;
  }
  50% {
    transform: translateX(200px);
    background-color: black;
  }
}

.animate-css {
  animation: bounce 3s infinite;
}
</style>
