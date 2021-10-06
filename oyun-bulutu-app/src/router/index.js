import { createRouter, createWebHistory } from "vue-router";
import { authRef } from "../firebase/config";
import Home from "../views/Home.vue";

const authControl = (to, from, next) => {
  let user = authRef.currentUser;
  if (!user) {
    next({ name: "Home" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/add",
    name: "Add",
    component: () => import(/* webpackChunkName: "add" */ "../views/Add.vue"),
    beforeEnter: authControl,
  },
  {
    path: "/games",
    name: "Games",
    component: () =>
      import(/* webpackChunkName: "games" */ "../views/Games.vue"),

    beforeEnter: authControl,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
