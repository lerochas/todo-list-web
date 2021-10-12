import React, { Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import styles from "./TodoRow.styles";

function TodoRow(props) {
  const { classes, todo, key } = props;

  return (
    <Fragment key={key}>
      <tr>
        <td width={"85%"} className={classes.text}>
          {todo.todo}
        </td>
        <td>
          {
            todo.isDone === true ? 
            <AiOutlineCheck className={classes.check} /> : 
            <AiOutlineClose className={classes.close} />
          }
        </td>
        <td>
          <IconButton aria-label="edit" className={classes.icon} >
            <CreateIcon />
          </IconButton>
        </td>
        <td>
          <IconButton aria-label="delete" className={classes.icon} >
            <DeleteIcon />
          </IconButton>
        </td>
      </tr>
    </Fragment>
  );
}

export default withStyles(styles)(TodoRow);
