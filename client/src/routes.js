import Landing from "../src/pages/Landing/Landing";
import Resume from "../src/pages/Resume/pages/Resume";
import Login from "../src/pages/Auth/Login";
import Register from "../src/pages/Auth/Register";

const routes = [
  { path: "/", component: Landing },
  { path: "/resume", component: Resume },
  { path: "/login", component: Login },
  { path: "/register", component: Register },

];

export default routes;
