import React, {Component} from 'react';
import './Box.css';

class Box extends Component {  

  render () {
    return <div className='Box'>
      <div className='Box-color' style={{
        height: `${this.props.height}em`,
        width: `${this.props.width}em`,
        backgroundColor: this.props.color,
        color:this.props.color
        }} />
        <button className='Box-btn' onClick={this.props.removeBox}>X</button>          
    </div>
  }
  
}

export default Box;