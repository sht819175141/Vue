import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import one from "./views/one.vue";
import two from "./views/two.vue";
Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/other",
      name: "other",
      component: () => import("./views/About.vue"),
      children: [{
          path: "one",
          name: "one",
          component: one,
          children: [{
            path: "/redirect",
            redirect: {
              path: "/other/two"
            }
          }]
        },
        {
          path: "two",
          component: two
        },
        {
          path: "home",
          redirect: "/"
        }
      ]
    },

  ]
});