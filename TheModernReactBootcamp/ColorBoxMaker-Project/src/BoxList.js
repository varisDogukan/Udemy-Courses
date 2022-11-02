import React, {Component} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state= {boxes: []}

    this.create = this.create.bind(this);
  }

  create (newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }

  remove (id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  };

  render () {
    const boxes = this.state.boxes.map(box => {
      const {width, height, color, id} = box;

      return <Box
        key={id}
        id={id}
        width={width}
        height={height}
        color={color} 
        removeBox={() => this.remove(box.id)}
      />
    });

    return <div className='BoxList'> 
      <h1 className='BoxList--title'>Color Box Maker Thingy</h1>
      <NewBoxForm createBox={this.create}/>
      <div className='BoxList__box-container'>
      {boxes}
      </div>
    </div>
  }
  
}

export default BoxList;