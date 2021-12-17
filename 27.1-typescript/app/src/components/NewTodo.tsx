import { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const value = todoTextRef.current!.value;
    if (value.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextRef} type="text" id="text" />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
