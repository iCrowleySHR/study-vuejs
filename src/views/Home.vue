<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { getCatFact } from '../services/api/catFactService.js'
import { getCatImage } from '../services/api/catImageService.js'
import Card from '../components/Card.vue'
import CustomButton from '../components/CustomButton.vue'

const catFact = ref('')
const catImage = ref('')
const loading = ref(false) 

const { locale, t } = useI18n()

const fetchData = async () => {
  loading.value = true
  catFact.value = await getCatFact(locale.value)
  catImage.value = await getCatImage()
  loading.value = false
}

onMounted(() => {
  fetchData()

})

watch(locale, () => {
  fetchData()
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-200">
    <h1 class="font-bold text-2xl">{{ t('title') }}</h1>
    <p v-if="loading" class="m-5">{{ t('description') }}</p>
    <template v-else>
      <Card :msg="catFact" :img="catImage" class="m-5" />
      <CustomButton @click="fetchData" :text="t('button')" /> 
    </template>
  </div>
</template>
