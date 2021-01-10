import React from "react";
import { Route } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import USDM from "./usdm/USDM";

const App = (): JSX.Element => {
  return (
    <Layout>
      <Route exact path="/" component={USDM} />
    </Layout>
  );
};

export default App;
