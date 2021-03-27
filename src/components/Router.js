// @ts-nocheck
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "components/Header";
import Home from "routes/Home";
import Tv from "routes/Tv";
import Search from "routes/Search";

const router = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" exact component={Tv}></Route>
        <Route path="/search" component={Search}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

export default router;
