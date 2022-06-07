import React, { useState } from 'react';

export default function AddTodo() {
  const [text, setText] = useState('');

  const addTodoHandler = (event) => {
    event.preventDefault();

    // 🐷 use redux to create

    setText('');
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add todo</button>
    </form>
  );
}
