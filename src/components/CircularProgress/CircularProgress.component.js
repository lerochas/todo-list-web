import React, { useMemo } from "react";
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./CircularProgress.styles";

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
