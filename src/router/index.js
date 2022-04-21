import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/teamlist/:uid",
    name: "teamlist",
    component: () => import("../components/TeamCard.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/playerlist/:tid/:tname",
    name: "playerlist",
    component: () => import("../views/PlayerList.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/testview/:tid:tname",
    name: "testview",
    component: () => import("../components/testView.vue"),
  },
  { path: "*", redirect: "/" }, // otherwise redirect to home
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next({
      path: "/",
    });
  }

  next();
});

export default router;
