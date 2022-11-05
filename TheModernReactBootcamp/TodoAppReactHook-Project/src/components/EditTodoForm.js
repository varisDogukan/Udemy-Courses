import React from 'react';
import useInputState from '../hooks/useInputState';

import { TextField } from '@material-ui/core';

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = evt => {
    evt.preventDefault();
    editTodo(id, value);
    toggleEditForm();
    reset();
  };

  const formStyle = {
    marginLeft: '1rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const buttonStyle = {
    padding: '.5rem 2rem',
    border: 'none',
    background: '#ADD5F7',
    color: '#444',
    textTransform: 'uppercase',
    fontWeight: '700',
    // hover background: #7FB2F0;
  };

  const inputStyle = {
    width: '82%',
    marginBottom: '1rem',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        style={inputStyle}
        autoFocus
      />
      <button type="submit" style={buttonStyle}>
        Edit
      </button>
    </form>
  );
}

export default EditTodoForm;
