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
    events : [],
    loading: false
  }

  //Function to search all envents from input
  clickHandler = async (keyword) => {
    this.setState({loading: true})
    this.setState({events: []})
    //console.log(city)
    //use fetch API to get data from Ticket Master API
    const classificationId = ["KZFzniwnSyZfZ7v7nJ"]
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&classificationId=${classificationId}&sort=date,asc&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg`)
    const res = await response.json();

    console.log(res);
    
    res._embedded.events.map( (event) => (   
      this.setState({events: [...this.state.events, event]})
    ))

    this.setState({loading: false});

    
  }

  //function to search single event details with event ID


  render() {
    
    if(this.state.loading === false){
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
                <EventDetails {...props} />
              )}>
  
              </Route>
            </Switch>       
          </Fragment>
        </Router>
      );
    }else{
      return (
        <p>Loading...</p>
      )
      
    }
 
  }
}

export default App;
