import React from 'react';
import './Styling/App.css';
import { Button } from 'react-bootstrap';

const latestUpdate = props => (
  <div className="update">
    <p className="centered tableItem">Senast uppdaterad: {props.latestUpdate}</p>
    <Button bsSize="large" onClick={props.fetchBuses}>Uppdatera manuellt</Button>
  </div>
)

export default latestUpdate;
