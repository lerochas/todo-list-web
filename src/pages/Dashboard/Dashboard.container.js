import React, { useState, useCallback, useEffect } from 'react';
import api from '../../services/api';
import DashboardComponent from './Dashboard.component';

export default function DashboardContainer(){
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(false);

    const getTodos = useCallback(async () => {
    setLoading(true);
    const response = await api.get("todos/someone");

    setLoading(false);
    setTodos(response.data.todos)
  }, [setTodos]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <DashboardComponent todos={todos} loading={loading} />
  );
}