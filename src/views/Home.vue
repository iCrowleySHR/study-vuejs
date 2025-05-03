<script setup>
import { ref, onMounted, watch } from 'vue'
import { getCatFact } from '../services/api/catFactService.js'
import { getCatImage } from '../services/api/catImageService.js'
import Card from '../components/Card.vue'
import CustomButton from '../components/CustomButton.vue'
import { useRoute } from 'vue-router'
import texts from '../locales/text.json'

const catFact = ref('')
const catImage = ref('')
const loading = ref(false)
const route = useRoute()

const lang = ref(route.params.lang || 'por-br')
const text = ref(texts[lang.value] || texts['por-b']) 

const fetchData = async () => {
  loading.value = true
  catFact.value = await getCatFact(lang.value)
  catImage.value = await getCatImage()
  loading.value = false
}

onMounted(() => {
  fetchData()
})

watch(() => route.params.lang, (newLang) => {
  lang.value = newLang || 'en-us'
  text.value = texts[lang.value] || texts['en-us']
  fetchData()
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-200">
    <h1 class="font-bold text-2xl">{{ text.title }}</h1>
    <p v-if="loading" class="m-5">{{ text.description }}</p>
    <template v-else>
      <Card :msg="catFact" :img="catImage" class="m-5" />
      <CustomButton @click="fetchData" :text="text.button" />
    </template>
  </div>
</template>
