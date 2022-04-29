import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../features/todos/todosSlice';

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
