import React, { useState, useCallback, useEffect } from 'react';
import api from '../../services/api';
import TodoTableComponent from './TodoTable.component';

//Este container está pegando todas as terafas contidas na API
export default function TodoTableContainer(){
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
    <TodoTableComponent todos={todos} loading={loading} />
  );
}