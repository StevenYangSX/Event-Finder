import React ,{Fragment, Component}from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './components/events/Events';
import Search from './components/search/Search';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import EventDetails from './components/eventDetails/EventDetails';

//https://app.ticketmaster.com/discovery/v2/events.json?city=vancouver&size=1&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg
class App extends Component{

  state = {
    event : {},
    events : []
  }

  //Function to search all envents from input
  clickHandler = async (keyword) => {
    //console.log(city)
    //use fetch API to get data from Ticket Master API
    const classificationId = ["KZFzniwnSyZfZ7v7nJ"]
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&classificationId=${classificationId}&sort=date,asc&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg`)
    const res = await response.json();

    console.log(res);
    
    res._embedded.events.map( (event) => (   
      this.setState({events: [...this.state.events, event]})
    ))
  }

  //function to search single event details with event ID
  eventDetails = async (eventId) => {
    console.log("eventId is:!!!:", eventId)
    const res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg`)
    //const res =  await response.json();
   
    this.setState({event: res.data});
    console.log("event object is:!!!:", res.data)
  }

  render() {
    return (
      <Router>
        <Fragment>
        <Navbar/>
          <Switch>
            
            <Route exact path="/" render={props => (
              <Fragment>   
              <h2>Showcase goes here</h2>
              <br/>
              <br/>
              <br/>
              <Search onClick={this.clickHandler}/>     
              <Events events={this.state.events}/>
            </Fragment>
            )}>
            </Route>

            <Route exact path="/about" component={About}/>

            <Route exact path="/event/:eventId" render={props =>(
              <EventDetails {...props} eventDetails={this.eventDetails} event={this.state.event}/>
            )}>

            </Route>
          </Switch>       
        </Fragment>
      </Router>
    );
  }
}

export default App;
