import React, { Component } from 'react';

import './Styling/App.css';
import moment from 'moment'

import BusList from './BusList';
import NextBus from './NextBus';
import LatestUpdate from './LatestUpdate';

//import apiKey from other file in .gitignore
import { apiKey } from '../secretKey';

//Cors hack to be able to access the api from localhost
const proxy = 'https://cors-anywhere.herokuapp.com/'
const departureAPI = `http://api.sl.se/api2/realtimedeparturesV4.json?key=${apiKey}&siteid=8012&timewindow=60&Metro=false&Train=false&Tram=false&Ship=false`


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      busData: [],
      nextBus: {
        'destination': '',
        'stop': '',
        'time': 0,
      },
      latestUpdate: '',
      updater:null
    }

  }

 //When component loads
  componentDidMount () {
    this.fetchBuses();
    //setup interval to call fetchbuses every minute
    const updater = setInterval(() => {
      this.fetchBuses()
    }, 60000);

    this.setState({updater})
  }

  componentWillUnmount () {
    clearInterval(this.state.updater)
  }

  //fetches buses from TrafikLab API
  fetchBuses = () => {

    fetch(proxy + departureAPI)
    .then(blob => blob.json())
    .then(res => {

      if(res.StatusCode === 0){
        //Clear busData and nextBus
        this.setState({busData: []});
        this.setState({nextBus:{
          'destination': '',
          'stop': '',
          'time': ''
        }})

        //Create array to hold departures
        let busArray = [];

        //loop through departures
        res.ResponseData.Buses.forEach(bus => {
          //if departure is towards city
          if(bus.Destination !== 'Nyfors'){
            //push the bus to the busArray
            busArray.push(bus)
          }
        });

        //update nextbus with the first bus
        this.setState({ nextBus: {
          'destination': busArray[0].Destination,
          'stop': busArray[0].StopAreaName,
          'time': busArray[0].DisplayTime
        }})

        //Update state with busArray
        this.setState({busData:busArray})

        //Update latestUpdate with the timestamp
        let now = moment();
        this.setState({latestUpdate: now.format('LLL')})

      } //End if
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    return (
      <div className="background">
        <div className="container-fluid wrapper">
          <NextBus nextBus={this.state.nextBus} />
          <BusList busData={this.state.busData} />
          <LatestUpdate latestUpdate={this.state.latestUpdate} fetchBuses={this.fetchBuses} />
        </div>
      </div>

    );
  }
}

export default App;
