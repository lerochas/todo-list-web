import React, { Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./TodoRow.styles";

function TodoRow(props) {
  const { classes, todo, key } = props;

  return (
    <Fragment key={key}>
      <tr>
        <th width={"75%"} className={classes.title}>
          {todo.username}
        </th>
        <th width={"75%"} className={classes.title}>
          {todo.todo}
        </th>
        <th width={"75%"} className={classes.title}>
          {todo.isDone === true ? "Feito" : "Pendente"}
        </th>
      </tr>
    </Fragment>
  );
}

export default withStyles(styles)(TodoRow);
