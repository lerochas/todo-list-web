import React from 'react';
import { withStyles } from "@material-ui/styles";
import styles from "./Dashboard.styles";

function Dashboard(props) {
  const {classes, todos} = props;

  return (
    <div className={classes.title}>
      Todo: {todos.map((todo) => {
        return (<p key={`${todo.todo}`}> {todo.todo} </p>)
      })}
    </div>
  );
};

export default withStyles(styles)(Dashboard);