import {createRouter, createWebHistory} from 'vue-router';
import LandingOpener from "@/components/LandingOpener.vue";
import LocationsItems from "@/components/LocationsItems.vue";
import SiteCrud from "@/components/Sites/SiteCrud.vue";
import ComponentLib from "@/components/Internal/ComponentLib.vue";

const routes = [
    { path: '/', component: LandingOpener },
    { path: '/locations', component: LocationsItems },
    { path: '/sites', component: SiteCrud },
    { path: '/library', component: ComponentLib },
]


export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})
