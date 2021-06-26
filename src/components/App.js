import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Revenue from "./Revenue";
import Expense from "./Expense";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useState } from "react";

export default function App() {
  const [user,setUser] = useState(undefined);
  return (
    <>
    	<UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LogIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/user/home" exact>
            <Home />
          </Route>
          <Route path="/user/revenue" exact>
            <Revenue />
          </Route>
          <Route path="user/expense" exact>
            <Expense />
          </Route>
          
        </Switch>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
