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
const imagePath = ref("");

const image = ref<HTMLImageElement | null>(null);

const onMouseMove = (event: MouseEvent) => {
    const container = event.currentTarget as HTMLElement;

    if (image.value && container) {
        const rect = container.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        image.value.style.transformOrigin = `${x}% ${y}%`;
        image.value.style.transform = 'scale(3)';
    }
};

const onMouseLeave = () => {
    if (image.value) {
        image.value.style.transform = 'scale(1)';
    }
};

let openModalWithImg = (path: string) => {
    imagePath.value = path;
    showModal.value = true;
}

</script>
<template>
    <UPage>
        <UHeader />
        <UMain>
            <section class="flex flex-col gap-2">
                <UH1>Корзина</UH1>
                <div class="flex flex-col w-full p-4 bg-white border border-smoke-200 rounded-lg gap-4">
                    <div class="grid grid-cols-2 gap-4 ">
                        <UButton @click="openModalWithImg('cart/figma.png')">
                            <div class="flex items-center justify-between">
                                <span>Figma</span>
                                +
                            </div>
                        </UButton>
                        <UButton @click="openModalWithImg('cart/uml_ozon.png')">
                            <div class="flex items-center justify-between">
                                <span>Ozon</span>
                                +
                            </div>
                        </UButton>
                        <UButton @click="openModalWithImg('cart/uml_aliexpress.png')">
                            <div class="flex items-center justify-between">
                                <span>Aliexpress</span>
                                +
                            </div>
                        </UButton>
                        <UButton @click="openModalWithImg('cart/uml_wb.png')">
                            <div class="flex items-center justify-between">
                                <span>Wildberries</span>
                                +
                            </div>
                        </UButton>
                        <UButton @click="openModalWithImg('cart/uml.png')">
                            <div class="flex items-center justify-between">
                                <span>UML</span>
                                +
                            </div>
                        </UButton>
                    </div>
                    <a class="text-accent hover:text-black transition-all"
                        href="https://disk.yandex.ru/i/LyUJ6qOu92cMlg">Ссылка на отчет</a>
                </div>
            </section>
        </UMain>
    </UPage>
    <UModal v-model="showModal">
        <div class="w-full h-full flex flex-col gap-2 justify-center items-center">
            <div class="flex justify-center items-center w-3/5 h-4/5 rounded-lg overflow-hidden relative border border-smoke-200"
                @mousemove="onMouseMove" @mouseleave="onMouseLeave">
                <img ref="image" class="object-contain w-full h-full transition-transform duration-700"
                    :src="imagePath" />
            </div>
        </div>
    </UModal>
</template>