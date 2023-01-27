import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";

//import Dashboard from "../views/BackEnd/Dashboard.vue";

const routes = [
  {
    path: "/admin",
    component: () =>
      import(
        /* webpackChunkName: "Dashboard" */ "@/views/BackEnd/Dashboard.vue"
      ),
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "Dashboard" */ "@/views/BackEnd/Dashboard.vue"
          ),
        beforeEnter: (to, from, next) => {
          if (!store.getters["auth/authenticated"]) {
            return next({ name: "login" });
          }

          next();
        },
      },
    ],
  },
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Home.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Contact.vue"),
  },
  {
    path: "/categories/:id?",
    name: "categories",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Categories.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/About.vue"),
  },
  {
    path: "/faqs",
    name: "faqs",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Faqs.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Login.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({ name: "home" });
      }

      next();
    },
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Register.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({ name: "home" });
      }

      next();
    },
  },
  {
    path: "/reset-password/:token",
    name: "resetpassword",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Resetpassword.vue"),
  },
  {
    path: "/product/:slug",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Product.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Cart.vue"),
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Wishlist.vue"),
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/AdminLogin.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
