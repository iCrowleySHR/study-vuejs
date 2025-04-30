<script setup>
import { ref, onMounted } from 'vue';
import { getCatFact } from './services/api/catFactService.js';
import Card from './components/Card.vue';

const catFact = ref('');
const loading = ref(false);

const fetchCatFact = async () => {
  loading.value = true;
  catFact.value = await getCatFact(); 
  loading.value = false;
};

onMounted(() => {
  fetchCatFact();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-200">
    <h1 class="font-bold text-2xl">Fato sobre Gatos 🐱</h1>
    <p v-if="loading">Carregando...</p>
    <Card v-else :msg="catFact" class="m-5"/>
  </div>
</template>

<style scoped>
</style>
