import React, { useCallback } from 'react';
import { useFormik } from "formik";
import api from '../../services/api';
import CardAddNewTodoComponent from './CardAddNewTodo.component';

export default function CardAddNewTodoContainer(){

  const onSubmit = useCallback(
    async (values, actions) => {
      const response = await api.post("todo",
        values,
      );
      actions.setSubmitting(response.data.todo);
      console.log(response.data.todo);
    },
    []
  );

  const formik = useFormik({
    initialValues: {
      todo: {
        todo: "",
        isDone: false,
      },
    },
    onSubmit,
  });

  return (
    <CardAddNewTodoComponent formik={formik} />
  );
}