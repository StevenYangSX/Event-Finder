import React ,{Fragment, Component}from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './components/events/Events';
import ShowCase from './components/showCase/ShowCase';
import Navbar from './components/layout/NavBar';
import About from './components/pages/About';
import EventDetails from './components/eventDetails/EventDetails';

class App extends Component{

  state = {
    event : {},
    events : [],
    loading: false,
    showCase: true
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

    this.setState({loading: false,showCase: false});

    
  }

  //function to search single event details with event ID


  render() {
    
    if(this.state.loading === false && this.state.showCase === true){
      return (
        <Router>
          <Fragment>
            <Navbar onClick={this.clickHandler}/>
            <Switch>  
              <Route exact path="/" render={props => (
                <Fragment>  
                  <ShowCase/>   
                </Fragment>
              )}>
              </Route>

              <Route exact path="/about" component={About}/>

            </Switch>       
          </Fragment>
        </Router>
        );
    }

    if(this.state.loading === false && this.state.showCase === false){
      return (
        <Router>
          <Fragment>
          <Navbar onClick={this.clickHandler}/>
            <Switch>  
              <Route exact path="/" render={props => (
                <Fragment>  
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
    }
    else{
      return (
        <div>
        <Navbar onClick={this.clickHandler}/>
        <p>Loading...</p>
        </div>
      )
      
    }
 
  }
}

export default App;
