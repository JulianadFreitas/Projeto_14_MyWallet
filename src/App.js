
import React from "react";
import Login from  "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";


export default function App() {
  
  return (
   <>
   <BrowserRouter>
   <Switch>
   <Route path='/' exact>
    <Login/>
  </Route>
   </Switch>
   </BrowserRouter></>
  );
}