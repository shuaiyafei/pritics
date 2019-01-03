import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("./views/Index.vue")
        },
        {
            path: "/instance",
            name: "instance",
            component: () => import("./views/Instance.vue")
        },
        {
            path: "/syntax",
            name: "syntax",
            component: () => import("./views/Syntax.vue")
        },
        {
            path: "/computed",
            name: "computed",
            component: () => import("./views/Computed.vue")
        },
        {
            path: "/class-and-style",
            name: "class",
            component: () => import("./views/Class.vue")
        },
        {
            path: "/conditional",
            name: "conditional",
            component: () => import("./views/Conditional.vue")
        },
        {
            path: "/list",
            name: "list",
            component: () => import("./views/List.vue")
        },
        {
            path: "/events",
            name: "events",
            component: () => import("./views/Events.vue")
        },
        {
            path: "/forms",
            name: "forms",
            component: () => import("./views/Forms.vue")
        },
        {
            path: "/components",
            name: "components",
            component: () => import("./views/Components.vue")
        }
    ]
});