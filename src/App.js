import Home from "./Components/home/Home";
import Login from "./Components/login/Login";
import Navbar from './Components/navbar/Navbar';
import Register from "./Components/register/Register";
import Write from "./Components/write/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Single from "./Components/single/Single";
import { useContext } from "react"
import { Context } from './Components/context/Context'
import Settings from "./Components/settings/Settings";

function App() {
   const { user } = useContext(Context)
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route  path="/login">
             <Login/>
          </Route>
          <Route path="/register">
             <Register/>
          </Route>
          <Route path="/write">
             {user ? <Write/>: <Home/>}
          </Route>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path="/post">
            {user ? <Single/>: <Home/>}
          </Route>
          <Route path="/settings">
            {user ? <Settings/>: <Login/>}
          </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
