import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/" component={Customers} />
    </Switch>
  );
};

export default Router;
