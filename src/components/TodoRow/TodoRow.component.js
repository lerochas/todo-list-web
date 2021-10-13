import React, { useState, Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { MenuItem, Select } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import styles from "./TodoRow.styles";

//TodoRow está mapeando e exibindo, linha a linha, cada tarefa
//Ele exibe a tarefa, o status, e dois ícones para as funções de editar e excluir tarefa
function TodoRow(props) {
  const { classes, formik, todo, deleteTodo, key } = props;
  const [ isInEditMode, setIsInEditMode ] = useState(false);

  //a função changeEditMode é responsável por alterar o estado de isInEditMode
  //esse estado é utilizado para alterar a UI
  //quando isInEditMode é igual a false, a tela fica com a configuração padrão
  //quando ele é igual a true, a tela fica com a configuração de alterar tarefa
  const changeEditMode = () => {
    setIsInEditMode(!isInEditMode);
  }

  //Esta função é responsável por apresentar campos para edição da tarefa quando
  //o ícone de edição recebe click 
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

  //Esta é a aparência padrão do componente, quando a tela é renderizada é assim que ela estará
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
