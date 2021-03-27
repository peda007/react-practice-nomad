import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "routes/Home";
import Tv from "routes/Tv";
import Search from "routes/Search";

const router = () => (
  <Router>
    <>
      <Route path="/" exact component={Home}></Route>
      <Route path="/tv" exact component={Tv}></Route>
      <Route path="/search" exact component={Search}></Route>
    </>
  </Router>
);

export default router;
