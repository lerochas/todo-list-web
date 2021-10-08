import React from 'react';
import { withStyles } from "@material-ui/styles";
import styles from "./Dashboard.styles";

function Dashboard(props) {
  const {classes} = props;

  return (
    <div className={classes.title}>Dashboard</div>
  );
};

export default withStyles(styles)(Dashboard);