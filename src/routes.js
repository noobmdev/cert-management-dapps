import Admin from "pages/admin";
import Censors from "pages/censors";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Users from "pages/users";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/admin",
    component: Admin,
    exact: true,
  },
  {
    path: "/censors",
    component: Censors,
    exact: true,
  },
  {
    path: "/users",
    component: Users,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
  },
];
