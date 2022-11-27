import React,{useEffect,createContext,useReducer,useContext} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import "./assets/css/pe-icon-7.css";
import "./assets/scss/themes.scss";
import Landing from "./pages/Landing/Landing";
import Resume from "./pages/Resume/pages/Resume";
import Admin from "./pages/Admin/Admin";
import Config from "./pages/Admin/Config";
import Apply from "./pages/Admin/Apply";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import {
  Route,
  Switch,
  BrowserRouter,
  useHistory
} from "react-router-dom";

//import reducer
import {reducer,initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing =()=>{
  //user auth logic
  // const history = useHistory()
  // const {state,dispatch} = useContext(UserContext)
  // useEffect(()=>{
  //   const user = JSON.parse(localStorage.getItem("user"))
  //   if(user){
  //     dispatch({type:"USER",payload:user})
  //   }
  //   else{
  //     history.push('/')
  //   }
  // },[])

  return (
    <Switch>
        <Route exact path="/">
           <Landing/>
        </Route>
        <Route path="/entrar">
           <Login/>
        </Route>
        <Route path="/registro">
           <Register/>
        </Route>
        <Route path="/resume">
           <Resume/>
        </Route>
        <Route exact path="/admin">
           <Admin/>
        </Route>
        <Route exact path="/config">
           <Config/>
        </Route>
        <Route exact path="/apply">
           <Apply/>
        </Route>
    </Switch>
  )
}

function App(){
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
             <Routing/>
        </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
