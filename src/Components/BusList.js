import React, { Component } from 'react';
import moment from 'moment'
import 'moment/locale/sv';
import { Table } from 'react-bootstrap';
import { Icon } from 'react-fa';

import './Styling/App.css';

moment.locale('sv');

class BusList extends Component {


  showBuses () {
    return this.props.busData.map( bus => {
      return (
        <tr key={bus.JourneyNumber}>
          <td className="tableItem">{bus.LineNumber}</td>
          <td className="tableItem">{bus.StopAreaName}</td>
          <td className="tableItem">{bus.Destination}</td>
          <td className="tableItem">{moment(bus.ExpectedDateTime).fromNow()}</td>
          <td className="tableItem">{moment(bus.ExpectedDateTime).format('LT')}</td>
        </tr>
    )
    })
  }


  render() {
    return (
      <div className="fine-blue-bg">
      <Table striped >
        <thead>
          <tr>
            <th className="centered tableItem">
              Buss &nbsp;
              <Icon name="bus" />
            </th>
            <th className="centered tableItem">
              Från &nbsp;
              <Icon name="arrow-left" />
            </th>
            <th className="centered tableItem">
              Mot &nbsp;
              <Icon name="arrow-right" />
            </th>
            <th className="centered tableItem">
              Avgår &nbsp;
              <Icon name="hourglass-end" />
            </th>
            <th className="centered tableItem">
              Tid &nbsp;
              <Icon name="clock-o" />
            </th>
          </tr>
        </thead>
        <tbody>
          {this.showBuses() }
        </tbody>
      </Table>
    </div>
    )
  }
}

export default BusList;
