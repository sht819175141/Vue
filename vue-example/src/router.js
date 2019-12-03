import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import one from "./views/one.vue";
import two from "./views/two.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/query",
      name: "query",
      component: () =>
        import("./views/query.vue"),
      children: [{
          path: "/",
          name: "one",
          component: one
        },
        {
          path: "one",
          name: "one",
          component: one
        },
        {
          path: "two",
          component: two
        }
      ]
    },
    {
      path: "/params",
      name: "params",
      component: () =>
        import("./views/params.vue")
    }, {
      path: "/two",
      name: "two",
      component: () =>
        import("./views/two.vue")
    }
  ]
});