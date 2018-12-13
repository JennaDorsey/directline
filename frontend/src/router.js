import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginSignUp from "./views/users/LoginSignUp";
import Login from "./views/users/Login";
import SignUp from "./views/users/SignUp";
//import { users, notifications, admin } from "./services/feathers";
import notifications from "./views/tasks/notifications";
import profile from "./views/tasks/profile";
import tasks from "./views/users/tasks";
import contactlist from "./views/users/contacts";

//import { contactlist } from "./services/feathers";

//import todo from "./views/tasks/todo";
//import contactlist from "./views/users/contactlist";
//import profile from "./views/tasks/profile";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/welcome",
      name: "login-or-signup",
      component: LoginSignUp
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/home",
     name: "home",
     component: Home
  },
  // {
  //    path: "/users",
  //    name: "users",
  //    component: users
  // },
  {
    path: "/tasks",
    name: "tasks",
    component: tasks
  },
  {
    path: "/notifications",
    name: "notifications",
    component: notifications
    },
  //   {
  //   path: "/admin",
  //   name: "admin",
  //   component: admin
  // },
  {
    path: "/profile",
    name: "profile",
    component: profile
    },
    {
      path: "/contacts",
      name: "contacts",
      component: contactlist
      },

  ]
});
