import Vue from "vue";
import Router from "vue-router";


import loginPage from '../pages/login-page/login-page'
import AnalyticsPage from '../pages/analytics-page/analytics-page';

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "login-page",
            component: loginPage,
        },
        {
            path: "/analytics-page",
            name: "analytics-page",
            component: AnalyticsPage,
        },
    ]
})