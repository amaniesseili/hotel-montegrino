import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'
import i18n from './i18n'


const app = createApp(App);
app.use(i18n);


// Utilizzo del router nel main file (main.js)
import { router } from "./router";

createApp(App).use(router).mount("#app");


