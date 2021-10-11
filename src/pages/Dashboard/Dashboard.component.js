import React from 'react';
import { withStyles } from "@material-ui/styles";
import TodoRow from '../components/TodoRow';
import styles from "./Dashboard.styles";

function Dashboard(props) {
  const {classes, todos} = props;

  return (
    <table >
      <tbody className={classes.title}>
      {todos.map((todo, key) => {
        return (<TodoRow todo={todo} key={key} />)
      })}
      </tbody>
    </table>
  );
};

export default withStyles(styles)(Dashboard);