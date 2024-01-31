import { createRouter, createWebHistory } from "vue-router";

// importazione componenti singole pagine
import HomePage from "./pages/Home.vue";
import ChiSiamoPage from "./pages/ChiSiamo.vue";
import GalleriaPage from "./pages/Galleria.vue";
import RecensioniPage from "./pages/Recensioni.vue";
import ServiziPage from "./pages/Servizi.vue";
import ContattiPage from "./pages/Contatti.vue";
import PrenotaPage from "./pages/Prenota.vue";



// definiamo le rotte
const routes = [
  {
    path: "/", // uri da scrivere nel browser
    name: "home", // nome della rotta da usare per creare un link
    component: HomePage // componente che ritorna l'html della pagina
  },
  {
    path: "/ChiSiamo",
    name: "ChiSiamo",
    component: ChiSiamoPage,
  },
  {
    path: "/Galleria",
    name: "Galleria",
    component: GalleriaPage,
  },
  {
    path: "/Recensioni",
    name: "Recensioni",
    component: RecensioniPage,
  },
  {
    path: "/Servizi",
    name: "Servizi",
    component: ServiziPage,
  },
  {
    path: "/Contatti",
    name: "Contatti",
    component: ContattiPage,
    //meta: { keepAlive: true },
  },
    {
    path: "/Prenota",
    name: "Prenota",
    component: PrenotaPage,
  },
  
 
	// ... altre rotte

]



// creazione istanza di Router
const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes
});




// esportiamo l'istanta router per poterla usare dentro main.js
export { router };