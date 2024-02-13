import {createRouter, createWebHistory} from 'vue-router';
import LandingOpener from "@/components/LandingOpener.vue";
import LocationsItems from "@/components/LocationsItems.vue";
import SiteCrud from "@/components/Sites/SiteCrud.vue";

const routes = [
    { path: '/', component: LandingOpener },
    { path: '/locations', component: LocationsItems },
    { path: '/sites', component: SiteCrud },
]


export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})
