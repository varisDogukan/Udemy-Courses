import React, {Component} from 'react';
import './NewBoxForm.css';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state= {height: '', width: '', color: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.setState(
    {[evt.target.name] : evt.target.value});
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const newBox = {...this.state, id: Math.random().toString().substring(2)};
    this.props.createBox(newBox);
    this.setState({height: '', width: '', color: ''});
  }
  
  render () {
    
    return (
      <form className='NewBoxForm' onSubmit={this.handleSubmit}> 
        <div className='NewBoxForm__group--container'>
          <div className='NewBoxForm__group'>
            <label  className='NewBoxForm__group--label' htmlFor="height">Height</label>
            <input 
              className='NewBoxForm__group--input'
              type="text" 
              id='height' 
              name='height'
              value={this.state.height} 
              onChange={this.handleChange}
              />
          </div>
          <div className='NewBoxForm__group'>
            <label  className='NewBoxForm__group--label' htmlFor="width">Width</label>
            <input
              className='NewBoxForm__group--input'
              type="text" 
              id='width' 
              name='width' 
              value={this.state.width} 
              onChange={this.handleChange}
              />
          </div>
          <div className='NewBoxForm__group'>
            <label  className='NewBoxForm__group--label' htmlFor="color">Color</label>
            <input 
              className='NewBoxForm__group--input'
              type="text" 
              id='color' 
              name='color' 
              value={this.state.color} 
              onChange={this.handleChange}
              />
          </div>
        </div>
        <button className='NewBoxForm--btn'>Add New Box</button>
      </form>
    )
  }
  
}

export default NewBoxForm;