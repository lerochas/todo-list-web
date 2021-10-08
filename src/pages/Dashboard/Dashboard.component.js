import React from 'react';
import { withStyles } from "@material-ui/styles";
import styles from "./Dashboard.styles";

function Dashboard(props) {
  const {classes, todo} = props;

  return (
    <div className={classes.title}>Todo: {todo}</div>
  );
};

export default withStyles(styles)(Dashboard);