<script setup>
defineProps({
  msg: String,
  img: String
})
</script>

<template>
  <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img 
      v-if="img" 
      :src="img" 
      alt="Imagem do gato" 
      class="mb-2 w-full object-cover rounded-lg"
    />
    <p class="font-normal text-gray-700 dark:text-gray-400 text-center">{{ msg }}</p>
  </div>
</template>

<style scoped>
</style>