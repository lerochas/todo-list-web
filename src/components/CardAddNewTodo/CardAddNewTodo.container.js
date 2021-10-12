import React, { Fragment, useCallback } from 'react';
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import api from '../../services/api';
import CardAddNewTodoComponent from './CardAddNewTodo.component';

export default function CardAddNewTodoContainer(){
  const onSubmit = useCallback(
    async (values, actions) => {
      const response = await api.post("todo",
        values,
      );
      const obj = response.data.todo;
      actions.setSubmitting(obj.username, obj.todo, obj.isDone);
      
      if (response.status === 200) {
        return toast.success("Tarefa adicionada com sucesso!");
      }
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
      isDone: false,
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