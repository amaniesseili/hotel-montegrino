import { createRouter, createWebHistory } from "vue-router";

// importazione componenti singole pagine
import HomePage from "./pages/Home.vue";
import ChiSiamoPage from "./pages/ChiSiamo.vue";
import GalleriaPage from "./pages/Galleria.vue";
import RecensioniPage from "./pages/Recensioni.vue";
import ServiziPage from "./pages/Servizi.vue";
import ContattiPage from "./pages/Contatti.vue";
import PrenotaPage from "./pages/Prenota.vue";

//prova mailjs
import MailJsPage from "./pages/MailJs.vue";



// definiamo le rotte
const routes = [
  {
    path: "/", // uri da scrivere nel browser
    name: "Home", // nome della rotta da usare per creare un link
    component: HomePage // componente che ritorna l'html della pagina
  },
  {
    path: "/chisiamo",
    name: "ChiSiamo",
    component: ChiSiamoPage,
  },
  {
    path: "/galleria",
    name: "Galleria",
    component: GalleriaPage,
  },
  {
    path: "/recensioni",
    name: "Recensioni",
    component: RecensioniPage,
  },
  {
    path: "/servizi",
    name: "Servizi",
    component: ServiziPage,
  },
  {
    path: "/contatti",
    name: "Contatti",
    component: ContattiPage,
    //meta: { keepAlive: true },
  },
    {
    path: "/prenota",
    name: "Prenota",
    component: PrenotaPage,
  },

  //----prova mailjs da cancellare
  {
    path: "/MailJs",
    name: "MailJs",
    component: MailJsPage,

  },
  //-----------------------------
]
// creazione istanza di Router
const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes
});
// esportiamo l'istanta router per poterla usare dentro main.js
export { router };