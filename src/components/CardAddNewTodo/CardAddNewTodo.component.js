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
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          component="main"
          className={classes.root}
        >
          <Grid item lg={9} xs={12}>
            <InputLabel id="todo-label" className={classes.label}>Tarefa</InputLabel>
            <TextField
              id="todo"
              name="todo"
              type="string"
              variant="outlined"
              className={classes.textField}
              value={formik.values.todo}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.todo)}
              helperText={formik.errors.todo}
            />
            </Grid>
          <Grid item lg={3} xs={12}>
            <InputLabel id="status-label" className={classes.label}>Status</InputLabel>
            <Select
              id="isDone"
              name="isDone"
              className={classes.label}
              value={formik.values.isDone}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.isDone)}
              autoWidth
            >
              <MenuItem value={true}>Concluído</MenuItem>
              <MenuItem value={false}>Pendente</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={12} xs={12}>
            <Button 
            type="submit" 
            variant="contained" 
            className={classes.btn}
            onClick={() => window.location.reload()}
            >
              Adicionar
            </Button>
            </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default withStyles(styles)(CardAddNewTodo);