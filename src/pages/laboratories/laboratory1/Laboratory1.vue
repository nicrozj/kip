<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue';
import UH1 from '@/components/UH1.vue';
import UHeader from '@/components/UHeader.vue';
import UMain from '@/components/UMain.vue';
import UPage from '@/components/UPage.vue';
import JsonScripts from './scripts.json';
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
                <h2 class="text-2xl text-accent">Лабараторная работа #1</h2>
            </div>
            <div class="flex flex-col gap-2 w-full">
                <details v-for="task, id in JsonScripts"
                    class="w-full bg-white border border-smoke-200 text-accent rounded-lg p-3 cursor-pointer transition-all shadow-sm">
                    <summary>
                        {{ task.title }}
                    </summary>
                    <div class="flex flex-col gap-4 h-max">
                        <p>{{ task.description }}</p>
                        <pre><code class="language-javascript">{{ addLineBreak(task.script) }}</code></pre>
                        <button @click="runScript(task)" @mouseover.stop
                            class="rounded-lg px-4 py-2 bg-gray-200 border-[1px] border-gray-300">Запустить
                        </button>
                    </div>
                </details>
                <details
                    class="w-full bg-white border border-smoke-200 text-accent rounded-lg p-3 cursor-pointer transition-all shadow-sm">
                    <summary>
                        Счетчик
                    </summary>
                    <div class="flex flex-col gap-4 h-max">
                        <p>Разработать счетчик</p>
                        <div class="flex gap-4 h-max items-center">
                            <button @click="counter--" class="bg-gray-200 rounded-lg p-2">-</button>
                            {{ counter }}
                            <button @click="counter++" class="bg-gray-200 rounded-lg p-2">+</button>
                        </div>
                    </div>
                </details>
            </div>
        </UMain>
    </UPage>
</template>
