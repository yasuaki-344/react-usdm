import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "#FFFFFF",
  },
});

type IndexProps = {
  match: {
    path: string;
  };
};

const Index = (props: IndexProps): JSX.Element => {
  const classes = useStyles();
  const { match } = props;

  return (
    <div className={classes.root}>
      <Typography gutterBottom>
        <Link to={`${match.path}create`}>新規作成</Link>
      </Typography>
      <div>this is index page.</div>
    </div>
  );
};

Index.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Index;
