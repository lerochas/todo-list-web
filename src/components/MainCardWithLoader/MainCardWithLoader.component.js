import React from "react";
import { withStyles } from "@material-ui/styles";
import { CssBaseline, Typography, Grid } from "@material-ui/core";
import CircularProgress from "../CircularProgress";
import styles from "./MainCardWithLoader.styles";

//esse componente consiste num card que retorna um loader enquanto os dados não são renderizados
function MainCardWithLoader(props) {
  const { classes, ready: isReady, component: Component } = props;

  return (
    <Grid
      item
      component="main"
      className={classes.root}
    >
      <CssBaseline />
      {isReady ? (
        <Component />
      ) : (
        <Typography variant="subtitle1" align="center" className={classes.icon}>
          <CircularProgress className={classes.circularProgress} size={14} />
        </Typography>
      )}
    </Grid>
  );
}

export default withStyles(styles)(MainCardWithLoader);
