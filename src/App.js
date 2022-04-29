import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

function App() {
  return (
    <div className='App'>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
