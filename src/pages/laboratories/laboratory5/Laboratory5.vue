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
                <h2 class="text-2xl text-accent">Жоркин Игорь</h2>
                <h2 class="text-2xl text-accent">3ИСИП-722</h2>
            </div>
            <div class="flex flex-col gap-2 w-full">
                <UH1>тестест</UH1>                  
            </div>
        </UMain>
    </UPage>
</template>
