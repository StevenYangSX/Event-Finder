import React, { useState, useEffect, Fragment } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"

const EventDetails = props => {
  const [event, setEvent] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    eventDetails(props.match.params.eventId)
  }, [])
  const eventDetails = async eventId => {
    const res = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg`
    )
    setEvent(res.data)
    setLoading(false)
  }

  if (loading === false) {
    return (
      <Fragment>
        <div className="container">
          <Link to="/" className="btn btn-light">
            Back to Search
          </Link>
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={event.images[0].url}
                className="round-img"
                style={{ width: "150px" }}
                alt=""
              />
              <h1>{event.name}</h1>
              <p>
                Time: {event.dates.start.localTime}{" "}
                {event.dates.start.localDate}
              </p>
              <p>
                Location: {event._embedded.venues[0].address.line1},{" "}
                {event._embedded.venues[0].name},{" "}
                {event._embedded.venues[0].city.name},{" "}
                {event._embedded.venues[0].country.name}
              </p>
              <a href={event.url} rel="noopener noreferrer" target="_blank">
                Go for Tickets
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    )
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
}

export default EventDetails
