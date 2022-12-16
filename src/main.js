import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {createApp} from "vue";
import {createRouter, createWebHashHistory} from "vue-router";
import App from './App.vue'
import MainPage from "@/pages/MainPage.vue";
import CanteenDishes from "@/pages/CanteenDishes.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: MainPage},
        {path: '/canteen/:id', component: CanteenDishes}
    ]
})


createApp(App).use(router).mount('#app')

