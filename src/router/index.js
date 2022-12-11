import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Landing.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Products from "../views/Products.vue";
import Contact from "../views/Contact.vue";
import Approach from "../views/Approach.vue";
import Coming from "../views/ComingSoon.vue";
import Header from "../layout/Navigation/AppHeader.vue";

import Footer from "../layout/Navigation/AppFooter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      footer: Footer,
    },
  },
  {
    path: "/about",
    name: "About",
    components: {
      header: Header,
      default: About,
      footer: Footer,
    },
  },
  {
    path: "/services",
    name: "Services",
    components: {
      header: Header,
      default: Services,
      footer: Footer,
    },
  },
  {
    path: "/products",
    name: "Products",
    components: {
      header: Header,
      default: Products,
      footer: Footer,
    },
  },
  {
    path: "/approach",
    name: "Approach",
    components: {
      header: Header,
      default: Approach,
      footer: Footer,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    components: {
      header: Header,
      default: Contact,
      footer: Footer,
    },
  },

  {
    path: "/coming-soon",
    name: "Coming soon",
    components: {
      default: Coming,
    },
  },

  {
    path: "*",
    name: "Error",

    components: {
      header: Header,
      default: () =>
        import(
          /* webpackChunkName: "404pages" */
          "../components/Error/404page.vue"
        ),
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
