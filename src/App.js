import React, { Fragment, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Events from "./components/events/Events"
import ShowCase from "./components/showCase/ShowCase"
import Navbar from "./components/layout/NavBar"
import About from "./components/pages/About"
import EventDetails from "./components/eventDetails/EventDetails"

const App = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [showCase, setShowCase] = useState(true)

  //Function to search all envents from input
  const clickHandler = async keyword => {
    setLoading(true)
    setEvents([])
    const classificationId = ["KZFzniwnSyZfZ7v7nJ"]
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&classificationId=${classificationId}&sort=date,asc&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg`
    )
    const res = await response.json()
    setEvents(res._embedded.events)
    setLoading(false)
    setShowCase(false)
  }

  if (loading === false && showCase === true) {
    return (
      <Router>
        <Fragment>
          <Navbar onClick={clickHandler} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <ShowCase />
                </Fragment>
              )}></Route>

            <Route exact path="/about" component={About} />
          </Switch>
        </Fragment>
      </Router>
    )
  }

  if (loading === false && showCase === false) {
    return (
      <Router>
        <Fragment>
          <Navbar onClick={clickHandler} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Events events={events} />
                </Fragment>
              )}></Route>

            <Route exact path="/about" component={About} />

            <Route
              exact
              path="/event/:eventId"
              render={props => <EventDetails {...props} />}></Route>
          </Switch>
        </Fragment>
      </Router>
    )
  } else {
    return (
      <div>
        <Navbar onClick={clickHandler} />
        <p>Loading...</p>
      </div>
    )
  }
}

export default App
