import React ,{Fragment, Component}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './components/events/Events';
import Event from './components/event/Event';
//import axios from 'axios';
import Search from './components/search/Search';
import Navbar from './components/layout/Navbar';
//RGAPI-15063e69-6a4d-49e8-b7d9-55529c07bd51
//RGAPI-9192225c-5303-4cac-9bb2-5170fcf46f1f
//RGAPI-6b74e87b-9912-47da-9147-3c1e17400b84
//https://app.ticketmaster.com/discovery/v2/events.json?city=vancouver&size=1&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg
class App extends Component{

  state = {
    events : []
  }

  clickHandler = async (city) => {
    //console.log(city)
    //use fetch API to get data from Ticket Master API
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${city}&size=5&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg`)
    const res = await response.json();

    console.log(res._embedded.events);
    
    res._embedded.events.map( (event) => (   
      this.setState({events: [...this.state.events, event]})
    ))
  }

  render() {
    return (
      <Fragment>
        <Navbar/>
        <div className="container">
          <h2>Showcase goes here</h2>
          <br/>
          <br/>
          <br/>
        </div>
        <Search onClick={this.clickHandler}/>
        <div className="container">
          <Events events={this.state.events}/>
        </div>
        
      </Fragment>
    );
  }
}

export default App;
