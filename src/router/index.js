import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { detectBrowserLocale, LANG_MAP } from '../utils/locale'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:lang([a-zA-Z-]+)?',
      name: 'Home',
      component: Home
    }
  ]
})

const validLangValues = Object.values(LANG_MAP)

router.beforeEach((to, from, next) => {
  const { lang } = to.params

  if (!lang || !validLangValues.includes(lang)) {
    const browserLocale = detectBrowserLocale()         // ex: pt
    const langValue = LANG_MAP[browserLocale] || 'eng-us'
    return next({ name: 'Home', params: { lang: langValue } })
  }

  next()
})

export default router
