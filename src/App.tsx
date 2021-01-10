import React from "react";
import { Route } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Index from "./usdm/Index";
import Create from "./usdm/Create";

const App = (): JSX.Element => {
  return (
    <Layout>
      <>
        <Route exact path="/" component={Index} />
        <Route path="/create" component={Create} />
      </>
    </Layout>
  );
};

export default App;
