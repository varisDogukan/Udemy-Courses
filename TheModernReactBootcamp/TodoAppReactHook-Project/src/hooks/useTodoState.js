import useLocalStorageState from './useLocalStorageState';
const { v4: uuidv4 } = require('uuid');

const useTodoState = initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false },
      ]);
    },
    removeTodo: todoId => {
      // filter out removed todo
      const newTodos = todos.filter(todo => todo.id !== todoId);

      // call setTodos with new todos array
      setTodos(newTodos);
    },
    toggleTodo: todoId => {
      const newTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodos);
    },
    editTodo: (todoId, newTask) => {
      const newTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(newTodos);
    },
  };
};

export default useTodoState;
