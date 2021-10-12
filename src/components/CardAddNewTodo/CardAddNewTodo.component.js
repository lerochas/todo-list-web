import React, { Fragment } from 'react';
import { Button, Grid, TextField } from "@material-ui/core";
import { InputLabel, MenuItem, Select } from "@mui/material"
import { withStyles } from "@material-ui/styles";
import styles from "./CardAddNewTodo.styles";

function CardAddNewTodo(props) {
  const {classes, formik} = props;

  return (
    <Fragment>
      <h2 className={classes.h2}>Adicionar Nova Tarefa</h2>
      <Grid
        container
        component="main"
        className={classes.root}
      >
        <Grid item lg={9} xs={12}>
          <InputLabel id="todo-label" className={classes.label}>Tarefa</InputLabel>
          <TextField
            id="todo"
            name="todo.todo"
            type="string"
            variant="outlined"
            className={classes.textField}
            value={formik.values.todo.todo}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.todo?.todo)}
            helperText={formik.errors.todo?.todo}
          />
          </Grid>
        <Grid item lg={3} xs={12}>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            id="isDone"
            name="todo.isDone"
            value={formik.values.todo.isDone}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.todo?.isDone)}
            autoWidth
          >
            <MenuItem value={true}>Concluído</MenuItem>
            <MenuItem value={false}>Pendente</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Button 
          variant="contained" 
          className={classes.btn}
          >
            Adicionar
          </Button>
          </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(CardAddNewTodo);