import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.task,
    };

    /*----------  binding methods  ----------*/
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChange(evt) {
    this.setState({
      task: evt.target.value,
    });
  }

  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            onClick={this.handleToggle}
            className={
              this.props.completed ? 'Todo-task completed' : 'Todo-task'
            }
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            {this.props.completed ? null : (
              <button onClick={this.toggleForm}>
                <i className="fas fa-pen"></i>
              </button>
            )}
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
