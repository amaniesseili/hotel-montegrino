import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'
//import i18n from './i18n'
import { createI18n } from 'vue-i18n'
import en from './locale/en.json'
import it from './locale/it.json'

// Utilizzo del router nel main file (main.js)
import { router } from "./router";


//per it8n.js-------------------
// const app = createApp(App);
// app.use(i18n);
// app.mount('#app');-----------






const i18n = createI18n({
  locale: 'it',
  messages: {
    en: en,
    it: it,

  }
})


//app.use(i18n)
//createApp(App).use(i18n).mount("#app");

createApp(App).use(i18n).use(router).mount("#app");


