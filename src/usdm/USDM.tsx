import React from "react";
import { Route } from "react-router";
import Index from "./Index";

const USDM = ({ match }: { match: { path: string } }): JSX.Element => {
  return (
    <>
      <Route exact path={`${match.path}/`} component={Index} />
    </>
  );
};

export default USDM;
