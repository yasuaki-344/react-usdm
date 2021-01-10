import React from "react";
import Container from "@material-ui/core/Container/";
import PropTypes from "prop-types";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
