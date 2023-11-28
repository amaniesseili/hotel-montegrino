import { createRouter, createWebHistory } from "vue-router";

// importazione componenti singole pagine
import HomePage from "./pages/Home.vue";


// definiamo le rotte
const routes = [
  {
    path: "/", // uri da scrivere nel browser
    name: "home", // nome della rotta da usare per creare un link
    component: HomePage // componente che ritorna l'html della pagina
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