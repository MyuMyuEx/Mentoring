import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue";
import MovieDetailsPage from "@/components/MovieDetailsPage.vue";
import SearchPage from "@/components/SearchPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/movie/:id",
    name: "MovieDetails",
    component: MovieDetailsPage,
  },
  {
    path: "/search",
    name: "Search",
    component: SearchPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
