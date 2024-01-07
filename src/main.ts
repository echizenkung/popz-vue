import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

import { createGtm } from '@gtm-support/vue-gtm';


import VueMobileDetection from "vue-mobile-detection";

import { useFavicon } from "@vueuse/core";
const icon = useFavicon();
icon.value = 'https://popslot.bet/assets/logo-2857ebd5.webp'; // change current icon

const head = createHead()
const app = createApp(App)
app.use(VueMobileDetection);
app.use(createPinia())
app.use(
    createGtm({
      id: "G-B7CVLX9SXN",
      vueRouter: router
    })
  )
app.use(router)
app.use(head)

app.mount('#app')
