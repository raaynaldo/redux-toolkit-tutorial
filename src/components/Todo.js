import React, { useState } from 'react';

export default function Todo(props) {
  const { todo } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const saveTodo = () => {
    // 🐽 use redux to update
    cancelEdit();
  };

  const deleteTodo = () => {
    // 🐽 use redux to delete
  };

  const cancelEdit = () => {
    setIsEdit(false);
  };

  return isEdit ? (
    <form onSubmit={saveTodo}>
      <input
        type='text'
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <button type='submit'>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
    </form>
  ) : (
    <>
      <span>{todo.text}</span>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      <button onClick={deleteTodo}>Delete</button>
    </>
  );
}
