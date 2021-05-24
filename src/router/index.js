import { createRouter, createWebHistory } from "vue-router";

import Stories from "../views/Stories";
import Registration from "../views/Registration";
import RegistrationSuccess from "../views/RegistrationSuccess";
import Login from "../views/Login";
import Story from "../views/Story";
import UserStories from "../views/UserStories";
import StoryForm from "../views/StoryForm";
import NotFound from "../views/NotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Stories,
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
    path: "/registration-success",
    name: "RegistrationSuccess",
    component: RegistrationSuccess,
  },
  {
    path: "/stories/:id",
    name: "Story",
    component: Story,
  },
  {
    path: "/my-stories",
    name: "UserStories",
    component: UserStories,
  },
  {
    path: "/create",
    name: "CreateStory",
    component: StoryForm,
  },
  {
    path: "/update",
    name: "UpdateStory",
    component: StoryForm,
  },
  {
    // route for 404 page
    // defined seperately so router.push can refer to it
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
  {
    // * fallback route for any unmatched route
    // path: "/:catchAll(.*)",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
