import Landing from "../src/pages/Landing/Landing";
import Resume from "../src/pages/Resume/pages/Resume";
import Admin from "../src/pages/Admin/Admin";
import Login from "../src/pages/Auth/Login";
import Register from "../src/pages/Auth/Register";

const routes = [
  { path: "/", component: Landing },
  { path: "/resume", component: Resume },
  { path: "/admin", component: Admin },
  { path: "/entrar", component: Login },
  { path: "/registro", component: Register },
];

export default routes;
