import React, { useState, useCallback, useEffect } from 'react';
import api from '../../services/api';
import DashboardComponent from './Dashboard.component';

export default function DashboardContainer(){
  const [todos, setTodos] = useState();

  const getTodos = useCallback(async () => {
    const response = await api.get("todos/someone");

    setTodos(response.data.todos);
    console.log(response.data);
  }, [setTodos]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <DashboardComponent todos={todos} />
  );
}