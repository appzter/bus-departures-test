import React, {Component} from 'react';
import './Styling/App.css';
import { Jumbotron } from 'react-bootstrap';
import { Icon } from 'react-fa';

class NextBus extends Component {
  render(){
    return(
      <Jumbotron>
        <h4>Nästa avgång</h4>
        <span className="dark-blue">
          <Icon
            name="bus"
            size="3x"
            />
        </span>
      <h2>
        {this.props.nextBus.stop} &nbsp;
        <Icon name="long-arrow-right" /> &nbsp;
        {this.props.nextBus.destination}
      </h2>
      <div>
         <h1>
           <span className="highlight" key={this.props.nextBus.time}>
             {this.props.nextBus.time}
           </span>
         </h1>
      </div>
    </Jumbotron>
    )
  }
}


export default NextBus;
