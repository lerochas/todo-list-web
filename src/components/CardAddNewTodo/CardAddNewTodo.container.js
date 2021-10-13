import React, { Fragment, useCallback } from 'react';
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import api from '../../services/api';
import CardAddNewTodoComponent from './CardAddNewTodo.component';

//Este container é responsável por mandar requisições para adicionar uma nova tarefa na API
export default function CardAddNewTodoContainer(){
  //Função responsável por enviar requisição post para o back-end
  const onSubmit = useCallback(
    async (values, actions) => {
      const response = await api.post("todo",
        values,
      );
      const obj = response.data.todo;
      actions.setSubmitting(obj.username, obj.todo, obj.isDone);
      //caso a requisição seja feita com sucesso, é retornado um toast na tela informando que a tarefa foi adicionada
      if (response.status === 200) {
        return toast.success("Tarefa adicionada com sucesso! Atualize a página");
      }
      //caso dê erro na requisição, é retornado um toast informando que algo deu errado
      if (response.status !== 200) {
        return toast.error("Algo deu errado...");
      }
    },
    []
  );

  const formik = useFormik({
    initialValues: {
      username: "someone",
      todo: "",
      isDone: "",
    },
    onSubmit,
  });

  return (
    <Fragment>
      <CardAddNewTodoComponent formik={formik} />
      <ToastContainer />
    </Fragment>
    );
}