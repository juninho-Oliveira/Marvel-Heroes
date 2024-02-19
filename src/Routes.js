import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesDom,
} from "react-router-dom";

import HomePage from "./pages/Home";
import DetailsPage from "./pages/Details";
import FormPage from "./pages/Form";

const Routes = () => (
  <Router>
    <RoutesDom>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/form" element={<FormPage />} />
    </RoutesDom>
  </Router>
);

export default Routes;