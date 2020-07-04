import AsyncComponent from "@/components/AsyncComponent";

const Home = AsyncComponent(() => import("."));
const Count = AsyncComponent(() => import("./count"));

export default [
  {
    link: "/",
    component: Home,
  },
  {
    linl: "/count",
    component: Count,
  },
];
