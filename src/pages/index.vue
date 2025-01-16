<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue';
</script>

<template>
  <main class="flex flex-col items-center gap-4 h-screen pt-10 pb-[20vh] w-full bg-smoke-100">
    <h1 class="text-4xl">Фото и Видеокамеры</h1>
    <h2 class="text-2xl text-accent">3ИСИП-722</h2>
    <section class="flex flex-col gap-2 w-full max-w-[1000px] px-10">
      <div class="flex flex-col gap-2 w-full">
        <h1 class="text-xl">Лабораторные работы</h1>
        <LinkButton>
          Лабораторная работа 1
        </LinkButton>
      </div>
    </section>
  </main>
</template>
