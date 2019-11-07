import React, { useEffect, Fragment } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import EventsContext from "../../context/events/eventsContext"

const EventDetails = props => {
  const eventsContext = React.useContext(EventsContext)

  useEffect(() => {
    eventsContext.eventDetails(props.match.params.eventId)
  }, [])

  if (eventsContext.loading === false) {
    return (
      <p>
        {console.log("In details, context is:", eventsContext.event.images)}
      </p>
      // <Fragment>
      //   <div className="container">
      //     <Link to="/" className="btn btn-light">
      //       Back to Search
      //     </Link>
      //     <div className="card grid-2">
      //       <div className="all-center">
      //         <img
      //           src={eventsContext.event.images[0].url}
      //           className="round-img"
      //           style={{ width: "150px" }}
      //           alt=""
      //         />
      //         <h1>{eventsContext.event.name}</h1>
      //         <p>
      //           Time: {eventsContext.event.dates.start.localTime}{" "}
      //           {eventsContext.event.dates.start.localDate}
      //         </p>
      //         <p>
      //           Location:{" "}
      //           {eventsContext.event._embedded.venues[0].address.line1},{" "}
      //           {eventsContext.event._embedded.venues[0].name},{" "}
      //           {eventsContext.event._embedded.venues[0].city.name},{" "}
      //           {eventsContext.event._embedded.venues[0].country.name}
      //         </p>
      //         <a
      //           href={eventsContext.event.url}
      //           rel="noopener noreferrer"
      //           target="_blank">
      //           Go for Tickets
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </Fragment>
    )
  } else {
    return (
      <div>
        <p>{console.log("check loading", eventsContext.loading)}</p>
        <p>Loading...</p>
      </div>
    )
  }
}

export default EventDetails
