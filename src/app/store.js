import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
