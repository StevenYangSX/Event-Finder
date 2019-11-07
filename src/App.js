import React, { Fragment, useContext } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Events from "./components/events/Events"
import ShowCase from "./components/showCase/ShowCase"
import Navbar from "./components/layout/NavBar"
import About from "./components/pages/About"
import EventDetails from "./components/eventDetails/EventDetails"

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <ShowCase />
        <Switch>
          <Route exact path="/" render={props => <Events />}></Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/event/:eventId" component={EventDetails}></Route>
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App
