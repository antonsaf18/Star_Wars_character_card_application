import Vue from "vue";
import Router from "vue-router";


import homePage from '../pages/home-page/home-page'
import favoriteHeroes from '../pages/favorite-heroes/favorite-heroes';

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "home-page",
            component: homePage,
        },
        {
            path: "/favorite-heroes",
            name: "favorite-heroes",
            component: favoriteHeroes,
        },
    ]
})