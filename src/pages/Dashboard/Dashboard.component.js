import React, { Fragment } from "react";
import { Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuAppBar from "../../components/MenuAppBar";
import TodoTable from "../../components/TodoTable";
import CardAddNewTodo from "../../components/CardAddNewTodo";
import styles from "./Dashboard.styles";

function Statements(props) {
  const { classes } = props;

  return (
    <Fragment>
      <MenuAppBar />
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TodoTable />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <CardAddNewTodo />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default withStyles(styles)(Statements);
