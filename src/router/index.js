import vue from "vue";
import Router from "vue-router";
import Componente1 from "@/components/Componente1";
import Componente2 from "@/components/Componente2";
import Inicio from "@/components/Inicio";
import PollsListed from "@/components/PollsListed";

vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/componente1",
      name: "componente1",
      component: Componente1,
    },
    {
      path: "/componente2",
      name: "componente2",
      component: Componente2,
    },
    {
      path: "/pollslisted",
      name:"pollslisted",
      component: PollsListed
    }
  ],
});
