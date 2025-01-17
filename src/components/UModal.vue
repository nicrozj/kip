<script setup lang="ts">
import UButton from './UButton.vue';

const isVisible = defineModel<boolean>();
</script>
<template>
    <Transition enter-from-class="opacity-0 scale-[1.05]" leave-to-class="opacity-0 scale-[1.05]">
        <div v-if="isVisible" class="fixed z-50 top-0 left-0 w-full h-screen bg-black/70 transition duration-200">
            <div class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white size-3/4 rounded-lg p-4">
                <button @click="isVisible=!isVisible"
                    class="absolute p-0 top-4 right-4 flex justify-center items-center size-8 rounded-full bg-smoke-200 hover:bg-smoke-100 transition-all duration-200">
                    <span class="material-symbols-outlined text-accent">
                        close
                    </span>
                </button>
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>