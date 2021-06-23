import React from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Revenue from "./Revenue";
import Expense from "./Expense";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/revenue" exact>
            <Revenue />
          </Route>
          <Route path="/expense" exact>
            <Expense />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
