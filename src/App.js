
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Header from './components/Header/Header'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/login">
            <Login/>
            <Route path="*">
            <NoMatch />
          </Route>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
