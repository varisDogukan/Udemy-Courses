import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };

    /* Binding handle methods */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  randomUuId() {
    let a = Math.random().toString(15).substring(2).split('');

    for (let i = 1; i < a.length; i++) {
      if (i % 4 === 0) {
        a.splice(i, 0, '-');
      }
    }
    return a.join('');
  }

  /*=============================================
  =            handle methods                   =
  =============================================*/

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = {
      ...this.state,
      id: this.randomUuId(),
      completed: false,
    };

    this.props.createTodo(newTodo);
    this.setState({ task: '' });
  }

  /*=====  End of handle methods  ======*/

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
