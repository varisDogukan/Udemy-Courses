import React from 'react';
import useInputState from '../hooks/useInputState';

/* Material-ui */
import { Paper, TextField } from '@material-ui/core';

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(value);
    reset();
  };

  const paperStyle = {
    margin: '1rem 0',
    padding: '0 1rem',
    background: 'rgba(255, 255, 255, 0.5)',
  };

  return (
    <Paper style={paperStyle}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
