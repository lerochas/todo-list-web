import React, { useCallback } from 'react';
import { useFormik } from "formik";
import api from '../../services/api';
import ModalAddTodoComponent from './ModalAddTodo.component';

export default function TodoTableContainer(){

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
        hasAttachment: false,
      },
    },
    onSubmit,
  });

  return (
    <ModalAddTodoComponent formik={formik} />
  );
}