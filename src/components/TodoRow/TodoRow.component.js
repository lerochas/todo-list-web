import React, { Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./TodoRow.styles";

function TodoRow(props) {
  const { classes, todo, key } = props;

  return (
    <Fragment key={key}>
      <tr>
        <td width={"30%"} className={classes.title}>
          {todo.username}
        </td>
        <td width={"75%"} className={classes.title}>
          {todo.todo}
        </td>
        <td width={"30%"} className={classes.title}>
          {todo.isDone === true ? "Feito" : "Pendente"}
        </td>
      </tr>
    </Fragment>
  );
}

export default withStyles(styles)(TodoRow);
