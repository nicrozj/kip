<script setup lang="ts">
import DataCell from '@/components/table/DataCell.vue';
import Row from '@/components/table/Row.vue';
import Table from '@/components/table/Table.vue';
import UH1 from '@/components/UH1.vue';
import UHeader from '@/components/UHeader.vue';
import UMain from '@/components/UMain.vue';
import UPage from '@/components/UPage.vue';

</script>
<template>
    <UPage>
        <UHeader />
        <UMain>
            <UH1 class="text-center">Лабараторная работа №1</UH1>
            <Table class="border border-accent w-full mt-5">
                <thead>
                    <DataCell></DataCell>
                    <DataCell>Aliexpress</DataCell>
                    <DataCell>Ozon</DataCell>
                    <DataCell>Wildeberries</DataCell>
                </thead>
                <tbody>
                    <Row>
                        <DataCell>Пример</DataCell>
                        <DataCell></DataCell>
                        <DataCell></DataCell>
                        <DataCell></DataCell>
                    </Row>
                    <Row>
                        <DataCell>Плюсы</DataCell>
                        <DataCell></DataCell>
                        <DataCell></DataCell>
                        <DataCell></DataCell>
                    </Row>
                    <Row>
                        <DataCell>Минусы</DataCell>
                        <DataCell></DataCell>
                        <DataCell></DataCell>
                        <DataCell></DataCell>
                    </Row>
                </tbody>
            </Table>
        </UMain>
    </UPage>
</template>