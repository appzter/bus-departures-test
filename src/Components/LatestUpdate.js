import React, { Component } from 'react';
import './Styling/App.css';

class LatestUpdate extends Component {
  render(){
    return(
      <div className="update">
        <p className="centered tableItem">Senast uppdaterad: {this.props.latestUpdate}</p>
      </div>
    )
  }
}

export default LatestUpdate;
