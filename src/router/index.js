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
    component: () => import("../views/TeamList.vue"),
  },
  {
    path: "/playerlist/:tid/:tname",
    name: "playerlist",
    component: () => import("../views/PlayerList.vue"),
  },
  {
    path: "/testview/:tid:tname",
    name: "testview",
    component: () => import("../components/testView.vue"),
  },
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
