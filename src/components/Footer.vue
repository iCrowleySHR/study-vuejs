<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()

const localeOptions = ref([
  { code: 'en-US', label: 'English' },
  { code: 'cs-CZ', label: 'Čeština' },
  { code: 'de-DE', label: 'Deutsch' },
  { code: 'bn-IN', label: 'বাংলা' },
  { code: 'es-MX', label: 'Español' },
  { code: 'ru-RU', label: 'Русский' },
  { code: 'pt-BR', label: 'Português' },
  { code: 'fil-PH', label: 'Filipino' },
  { code: 'uk-UA', label: 'Українська' },
  { code: 'ur-PK', label: 'اردو' },
  { code: 'it-IT', label: 'Italiano' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'ko-KR', label: '한국어' }
])
</script>

<template>
  <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-800  ">
    <div class="w-full mx-auto py-4 flex flex-row justify-between items-center container ">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Feito com 💙 para <br>
        a minha Katotona.
      </span>
      <ul class="text-sm font-medium text-gray-500 dark:text-gray-400 ">
        <li>
          <a href="https://github.com/iCrowleySHR/study-vuejs" class="hover:underline text-2xl" target="_blank">
            <i class="pi pi-github"></i>
          </a>
        </li>
      </ul>
      <select v-model="locale" class="mb-4 p-2 rounded shadow">
        <option v-for="option in localeOptions" :key="option.code" :value="option.code">
          {{ option.label }}
        </option>
      </select>
    </div>
  </footer>
</template>

<style scoped></style>
