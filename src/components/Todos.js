import Todo from './Todo';

export default function Todos() {
  // 🐽 update the todos below, and get the data from redux
  const todos = [{ id: 1, text: 'this is hardcoded data' }];

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
