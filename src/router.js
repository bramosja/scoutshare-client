import {createRouter, createWebHistory} from 'vue-router';
import LandingOpener from "@/components/LandingOpener.vue";
import LocationsItems from "@/components/LocationsItems.vue";
import SiteCrud from "@/components/Sites/SiteCrud.vue";
import ComponentLib from "@/components/Internal/ComponentLib.vue";
import SearchComponent from "@/components/Search/SearchComponent.vue";

const routes = [
    { path: '/library', component: ComponentLib },
    { path: '/', component: LandingOpener },
    { path: '/locations', component: LocationsItems },
    { path: '/search', component: SearchComponent },
    { path: '/sites', component: SiteCrud },
]


export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})
