import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import Categories from "./pages/Categories";
import Category from "./pages/Category";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/about",
            name: "about",
            component: About,
        },
        {
            path: "/categories",
            name: "categories",
            component: Categories,
        },
        {
            path: "/category/:slug",
            name: "category",
            component: Category,
        },
        {
            path: "/posts/:slug",
            name: "post",
            component: Post,
        },
    ]
});

export default router