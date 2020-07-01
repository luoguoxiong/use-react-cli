import AsyncComponent from "@/components/AsyncComponent";

const Home = AsyncComponent(() => import("./home"));
const Good = AsyncComponent(() => import("./good"));
const routes = [
  {
    link: "/",
    component: Home,
  },
  {
    link: "/goods",
    component: Good,
  },
];
export default routes;
