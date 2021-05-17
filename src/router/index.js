import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home";
import Registration from "../views/Registration";
import Login from "../views/Login";
import Story from "../views/Story";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: Login,
  },
  {
    path: "/stories/:id",
    name: "Story",
    component: Story,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
