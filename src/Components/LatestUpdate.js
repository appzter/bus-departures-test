import React, { Component } from 'react';
import './Styling/App.css';
import { Button } from 'react-bootstrap';

class LatestUpdate extends Component {
  render(){
    return(
      <div className="update">
        <p className="centered tableItem">Senast uppdaterad: {this.props.latestUpdate}</p>
        <Button bsSize="large" onClick={this.props.fetchBuses}>Uppdatera manuellt</Button>
      </div>
    )
  }
}

export default LatestUpdate;
