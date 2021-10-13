import React, { Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import MainCardWithLoader from '../MainCardWithLoader';
import TodoRow from '../TodoRow';
import styles from "./TodoTable.styles";

function TodoTable(props) {
  const {classes, todos, loading: isLoading} = props;

  return (
    <Fragment>
      <h2 className={classes.h2}>Lista de Tarefas</h2>
      <MainCardWithLoader
        ready={!isLoading}
        component={() => (
          <table >
            <tbody>
            <tr>
              <th className={classes.title}>
                Tarefa
              </th>
              <th className={classes.title}>
                Status
              </th>
            </tr>
              {todos === null ? (
                  isLoading
                ): 
                  todos.map((todo, key) => (<TodoRow todo={todo} key={key} />))
              }
            </tbody>
          </table>
        )}
    />
    </Fragment>
  );
};

export default withStyles(styles)(TodoTable);