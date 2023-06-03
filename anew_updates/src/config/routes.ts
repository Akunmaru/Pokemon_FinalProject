import Home  from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Starters from "../pages/Starters"

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false
    },
    {
      path: "/starters",
      component: Starters,
      name: "Starters",
      protected: false
    }
  ];

  export default routes