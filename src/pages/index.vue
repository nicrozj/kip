<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue';
import UH1 from '@/components/UH1.vue';
import UHeader from '@/components/UHeader.vue';
import UMain from '@/components/UMain.vue';
import UPage from '@/components/UPage.vue';
</script>

<template>
  <UPage>
    <UHeader />
    <UMain>
      <div class="text-center my-10">
        <UH1>Фото и видеокамеры</UH1>
        <h2 class="text-2xl text-accent">3ИСИП-722</h2>
      </div>
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-[1000px] px-5">
        <div class="flex flex-col gap-2 w-full">
          <h1 class="text-xl">Лабораторные работы</h1>
          <LinkButton href="/laboratory_work/1">
            Лабораторная работа 1
          </LinkButton>
        </div>
        <div class="flex flex-col gap-2 w-full">
          <h1 class="text-xl">Доработки</h1>
          <LinkButton href="/">
            ---
          </LinkButton>
        </div>
        <div class="flex flex-col gap-2 w-full">
          <h1 class="text-xl">Учебная практика</h1>
          <LinkButton href="/">
            ---
          </LinkButton>
        </div>
      </section>
    </UMain>
  </UPage>
</template>
