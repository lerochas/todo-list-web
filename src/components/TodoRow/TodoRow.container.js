import React, { useCallback, Fragment } from 'react';
import { useFormik } from "formik";
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

  const onSubmit = useCallback(
    async (values, actions) => {
      const response = await api.put(`todo/${todo._id}`,
        values.todo,
        values.isDone,
      );
      const obj = response.data.todo;
      actions.setSubmitting(obj.todo, obj.isDone);
      
      if (response.status === 200) {
        return toast.success("Tarefa alterada com sucesso!");
      }
      if (response.status !== 200) {
        return toast.error("Algo deu errado...");
      }
    },
    [todo._id]
  );

  const formik = useFormik({
    initialValues: {
      todo: todo.todo,
    },
    onSubmit,
  });

  return (
    <Fragment>
      <TodoRowComponent 
        formik={formik} 
        todo={todo} 
        deleteTodo={deleteTodo}  
      />
      <tr>
        <td>
          <ToastContainer />
        </td>
      </tr>
    </Fragment>
  );
}