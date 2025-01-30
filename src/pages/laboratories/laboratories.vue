<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue';
import UH1 from '@/components/UH1.vue';
import UHeader from '@/components/UHeader.vue';
import UMain from '@/components/UMain.vue';
import UPage from '@/components/UPage.vue';
import { ref } from 'vue';

const runScript = (task: any) => {
    eval(task.script);
};

const addLineBreak = (script: string) => {
    return script.split('; ').join(';\n');
}

const counter = ref(0);
</script>

<template>
    <UPage>
        <UHeader />
        <UMain>
            <div class="text-center my-10">
                <h2 class="text-2xl text-accent">Лабараторные работы</h2>
            </div>
            <div class="flex flex-col gap-2 w-full">
                <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-[1000px] px-5">
                    <div class="flex flex-col gap-2 w-full">
                        <LinkButton href="/laboratory1">
                            Лабораторная работа #1
                        </LinkButton>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <LinkButton href="/laboratory2">
                            Лабораторная работа #2
                        </LinkButton>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <LinkButton href="/laboratory3">
                            Лабораторная работа #3
                        </LinkButton>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <LinkButton href="/laboratory4">
                            Лабораторная работа #4
                        </LinkButton>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <LinkButton href="/laboratory5">
                            Лабораторная работа #5
                        </LinkButton>
                    </div>
                </section>
            </div>
        </UMain>
    </UPage>
</template>
