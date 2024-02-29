//aggiungere il router all-applicazione vue 
import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'

//import mailjs------------ 
import emailjs from '@emailjs/browser';
//configurazione mailjs con le mie credenziali STMP
emailjs.init("3-zYgyyo5JxP41VeF");// public key da emailjs
//-------------------------

import { createI18n } from 'vue-i18n'
import en from './locale/en.json'
import it from './locale/it.json'
import fr from './locale/fr.json'
import de from './locale/de.json'
// Utilizzo del router nel main file (main.js)
import { router } from "./router";




const i18n = createI18n({
  locale: 'it',
  messages: {
    en: en,
    it: it,
    fr: fr,
    de: de,
  }
})
createApp(App).use(i18n).use(router).mount("#app");


