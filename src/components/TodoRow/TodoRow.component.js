import React, { Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import styles from "./TodoRow.styles";

function TodoRow(props) {
  const { classes, todo, key } = props;

  return (
    <Fragment key={key}>
      <tr>
        <td width={"15%"} className={classes.text}>
          {todo.todo}
        </td>
        <td width={"7%"} className={classes.text}>
          {
            todo.isDone === true ? 
            <AiOutlineCheck className={classes.check} /> : 
            <AiOutlineClose className={classes.close} />
          }
        </td>
      </tr>
    </Fragment>
  );
}

export default withStyles(styles)(TodoRow);
