import { wrap } from "svelte-spa-router/wrap";
import Error from "../src/pages/404.svelte";

export const routes = {
  "/": wrap({
    asyncComponent: () => import("./pages/home/index.svelte"),
  }),
  "*": Error,
};
