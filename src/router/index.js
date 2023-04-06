import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
    path: "/consider-outsourcing",
    name: "Outsourcing",
    component: () => import("@/views/Outsourcing.vue"),
  },
  {
    path: "/magento",
    name: "Magento",
    component: () => import("@/views/Magento.vue"),
    meta: { magentoHeader: true },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("@/views/Portfolio.vue"),
  },
  {
    path: "/cant-find",
    name: "CantFind",
    component: () => import("@/views/CantFind.vue"),
  },
  {
    path: "/our-story",
    name: "OurStory",
    component: () => import("@/views/OurStory.vue"),
  },
  {
    path: "/:way/project/:id",
    name: "PortfolioProjectWatch",
    component: () => import("@/components/PortfolioProjectWatch.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("@/views/Contacts.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/Blog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      if(window.location.pathname ==='/our-story/project/resolute-intranet-and-sundashboard/'){
        return {
          el: 'to.hash',
          top: -110,
        }
      }
      else{
        return new Promise((resolve) => {
          // setTimeout(() => {
            resolve({
              el: to.hash,
              behavior: 'smooth',
            })
          // }, 300)
        })
      }
    }
    if(window.location.pathname === '/'){
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
    return {
      top: 0
    }
  },
});

export default router;
