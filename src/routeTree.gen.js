/* eslint-disable */

// @ts-nocheck

import { Route as rootRouteImport } from "./routes/__root";
import { Route as IndexRouteImport } from "./routes/index";

const IndexRoute = IndexRouteImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRouteImport,
});

const rootRouteChildren = {
  IndexRoute: IndexRoute,
};

export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes();
