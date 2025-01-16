<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue';
import DataCell from '@/components/table/DataCell.vue';
import Row from '@/components/table/Row.vue';
import Table from '@/components/table/Table.vue';
import UH1 from '@/components/UH1.vue';
import UButton from '@/components/UButton.vue';
import UHeader from '@/components/UHeader.vue';
import UMain from '@/components/UMain.vue';
import UPage from '@/components/UPage.vue';
import { ref } from 'vue';
import UModal from '@/components/UModal.vue';

const showModal = ref(false);

</script>
<template>
    <UPage>
        <UHeader />
        <UMain>
            <section>
                <div class="grid grid-cols-2 gap-4 w-full p-4 bg-white border border-smoke-200 rounded-lg">
                    <UButton @click="showModal=!showModal">
                        <div class="flex items-center justify-between">
                            <span>Figma</span>
                            +
                        </div>
                    </UButton>
                    <UButton @click="showModal = !showModal">
                        <div class="flex items-center justify-between">
                            <span>Ozon</span>
                            +
                        </div>
                    </UButton>
                    <UButton @click="showModal = !showModal">
                        <div class="flex items-center justify-between">
                            <span>Aliexpress</span>
                            +
                        </div>
                    </UButton>
                    <UButton @click="showModal = !showModal">
                        <div class="flex items-center justify-between">
                            <span>Wildberries</span>
                            +
                        </div>
                    </UButton>
                    <UButton @click="showModal = !showModal">
                        <div class="flex items-center justify-between">
                            <span>UML</span>
                            +
                        </div>
                    </UButton>
                </div>
            </section>
        </UMain>
    </UPage>
    <UModal v-model="showModal">
        <div class="w-full h-full flex justify-center items-center">
            <div
                class="flex justify-center items-center w-4/5 h-4/5 rounded-lg overflow-hidden border border-smoke-200 shadow-md">
                <img class="object-contain w-full h-full" src="/cart/figma.png" />
            </div>
        </div>
    </UModal>
</template>