import React, { Fragment } from 'react';
import { withStyles } from "@material-ui/styles";
import MainCardWithLoader from '../components/MainCardWithLoader'
import TodoRow from '../components/TodoRow';
import styles from "./Dashboard.styles";

function Dashboard(props) {
  const {classes, todos, loading: isLoading} = props;

  return (
    <Fragment>
      <MainCardWithLoader
        ready={!isLoading}
        component={() => (
          <table >
            <tbody className={classes.title}>
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

export default withStyles(styles)(Dashboard);