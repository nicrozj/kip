<script setup lang="ts">
import UHeader from "@/components/UHeader.vue";
import UMain from "@/components/UMain.vue";
import UPage from "@/components/UPage.vue";

function incrementCounter(counterNumber: number) {
  let counterElement = document.getElementById(`counter${counterNumber}`);
  let currentValue = parseInt(counterElement!.innerHTML);
  counterElement!.innerHTML = JSON.stringify(currentValue + 1);
}

function decrementCounter(counterNumber: number) {
  let counterElement = document.getElementById(`counter${counterNumber}`);
  let currentValue = parseInt(counterElement!.innerHTML);
  counterElement!.innerHTML = JSON.stringify(currentValue - 1);
}
</script>

<template>
  <UPage>
    <UHeader />
    <UMain>
      <div
        class="text-center my-10 flex flex-col justify-center items-center bg-slate-100 p-10 rounded-lg"
      >
        <div class="flex gap-4">
          <span id="counter1">0</span>
          <button @click="incrementCounter(1)">+</button>
        </div>
        <div class="flex gap-4">
          <div id="counter2">0</div>
          <button @click="decrementCounter(2)">-</button>
        </div>
        <div class="flex gap-4">
          <p id="counter3">0</p>
          <button @click="incrementCounter(3)">+</button>
        </div>
        <div class="flex gap-4">
          <h1 id="counter4">0</h1>
          <button @click="decrementCounter(4)">-</button>
        </div>
      </div>
    </UMain>
  </UPage>
</template>
