import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routers from "@/pages/router";

export default () => {
  return (
    <Router>
      {routers.map((item) => (
        <Route
          path={item.link}
          exact
          key={item.link}
          render={() => <item.component />}
        />
      ))}
    </Router>
  );
};
