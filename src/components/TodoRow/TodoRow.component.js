import React, { useState, Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { MenuItem, Select } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import styles from "./TodoRow.styles";

function TodoRow(props) {
  const { classes, formik, todo, deleteTodo, key } = props;
  const [ isInEditMode, setIsInEditMode ] = useState(false);

  const changeEditMode = () => {
    setIsInEditMode(!isInEditMode);
  }

  const renderEditView = () => {
    return (
      <>
        <td width={"100%"} className={classes.text}>
          <form onSubmit={formik.handleSubmit}>
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
            <Select
              id="isDone"
              name="todo.isDone"
              className={classes.label}
              value={formik.values.todo.isDone}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.todo?.isDone)}
              autoWidth
            >
              <MenuItem value={true}>Concluído</MenuItem>
              <MenuItem value={false}>Pendente</MenuItem>
            </Select>
            <Button 
              type="submit"
              variant="contained"
              className={classes.btnSave}
              onClick={() => (formik.submitCount === 1 ? window.location.reload() : null)}
            >
              Salvar
            </Button>
            <Button 
              variant="contained"
              className={classes.btnCancel}
              onClick={changeEditMode}
            >
              Cancelar
            </Button>
          </form>
        </td>
      </>
    )
  }

  const renderDefaultView = () => {
    return (
      <>
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
          <IconButton 
            aria-label="edit" 
            className={classes.icon}
            onClick={changeEditMode}
          >
            <CreateIcon />
          </IconButton>
        </td>
        <td>
          <IconButton aria-label="delete" className={classes.icon} onClick={deleteTodo} >
            <DeleteIcon />
          </IconButton>
        </td>
      </>
    )
  }

  return (
    <Fragment key={key}>
        <tr>
        {
          isInEditMode ? 
          renderEditView() :
          renderDefaultView()
        }
      </tr>
    </Fragment>
  );
}

export default withStyles(styles)(TodoRow);
