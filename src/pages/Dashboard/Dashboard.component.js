import React, { useState, Fragment } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuAppBar from "../../components/MenuAppBar";
import TodoTable from "../../components/TodoTable";
import ModalAddTodo from "../../components/ModalAddTodo";
import styles from "./Dashboard.styles";

function Statements(props) {
  const { classes } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Fragment>
      <MenuAppBar />
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TodoTable />
          </Grid>
        </Grid>
        <div className={classes.btnPosition}>
         <Button 
          variant="contained" 
          className={classes.btn}
          onClick={() => setIsModalVisible(true)}
          >
            Adicionar Tarefa
          </Button>
          {isModalVisible ? (
            <ModalAddTodo onClose={() => setIsModalVisible(false)}>
              <h1>teste modal</h1>
            </ModalAddTodo>
          ): null}
        </div>
      </Container>
    </Fragment>
  );
}

export default withStyles(styles)(Statements);
