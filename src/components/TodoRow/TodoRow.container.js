import React, { useCallback, Fragment } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import api from '../../services/api';
import TodoRowComponent from './TodoRow.component';

export default function TodoRowContainer(props){
  const {todo} = props;

  const deleteTodo = useCallback(async () => {
    const response = await api.delete(`todo/${todo._id}`);

    if (response.status === 200) {
      return toast.success("Tarefa excluída com sucesso!");
    }
    if (response.status !== 200) {
      return toast.error("Algo deu errado...");
    }
  }, [todo._id]);


  return (
    <Fragment>
      <TodoRowComponent todo={todo} deleteTodo={deleteTodo}/>
      <tr>
        <td>
          <ToastContainer />
        </td>
      </tr>
    </Fragment>
  );
}