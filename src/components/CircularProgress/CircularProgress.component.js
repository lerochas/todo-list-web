import React, { useMemo } from "react";
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./CircularProgress.styles";

//Esse componente trabalha juntamente com o MainCardWithLoader,
//Ele retorna o loarder que fica girando no card
function CircularProgressComponent(props) {
  const { classes, size, display } = props;
  const displayCapitalized = useMemo(() => {
    if (!display) {
      return "Block";
    }

    return display.charAt(0).toUpperCase() + display.slice(1);
  }, [display]);

  return (
    <span display={display} className={classes[`display${displayCapitalized}`]}>
      <CircularProgress size={size} />
    </span>
  );
}

export default withStyles(styles)(CircularProgressComponent);
