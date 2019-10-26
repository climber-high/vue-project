import Vue from "vue";
import Router from "vue-router";
import Account from "./components/main/Account";
import GoodsList from "./components/main/GoodsList";
import Login from "./components/main/login";
import Register from "./components/main/register";


Vue.use(Router);

export default new Router({
  //mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/Account",
      name:"Account",
      component:Account,
      children:[
        {path:"login",component:Login},
        {path:"register",component:Register}
      ]},
    {
      path:"/GoodsList",
      name:"GoodsList",
      component:GoodsList
    }
  ]
});
