import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
//import EventsContext from "../../context/events/eventsContext"

const EventDetails = props => {
  // const eventsContext = React.useContext(EventsContext)
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});

  const eventDetails = async eventId => {
    //console.log("check loading status:::", loading)
    const res = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg`
    );
    setEvent(res.data);
    // console.log("IN SET_EVENT, DATA IS:", res.data)
    // dispatch({ type: SET_EVENT, payload: res.data })
    //console.log("check loading status(3):again expected true", loading)
    setLoading(false);
  };

  useEffect(() => {
    eventDetails(props.match.params.eventId);
  }, []);

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
    );
  } else {
    return (
      <div>
        <p>{console.log("check loading", loading)}</p>
        <p>Loading...</p>
      </div>
    );
  }
};

export default EventDetails;
