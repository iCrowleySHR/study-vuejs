<script setup>
import { ref, onMounted } from 'vue';
import { getCatFact } from '../services/api/catFactService.js';
import { getCatImage } from '../services/api/catImageService.js';
import Card from '../components/Card.vue';
import CustomButton from '../components/CustomButton.vue'
import { useRoute } from 'vue-router'

const catFact = ref('');
const catImage = ref('');
const loading = ref(false);
const route = useRoute()
const lang = route.params.lang

const fetchData = async () => {
  loading.value = true;
  catFact.value = await getCatFact(lang);
  catImage.value = await getCatImage()
  loading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-200">
    <h1 class="font-bold text-2xl">Fato sobre Gatos 🐱</h1>
    <p v-if="loading" class="m-5">Carregando...</p>
    <template v-else>
      <Card :msg="catFact" :img="catImage" class="m-5" />
      <CustomButton @click="fetchData" :text="`Carregar novo fato`" />
    </template>
  </div>
</template>

<style scoped></style>
