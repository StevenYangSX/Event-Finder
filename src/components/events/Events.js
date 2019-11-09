import React, { useContext } from "react"
import Event from "../event/Event"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import EventsContext from "../../context/events/eventsContext"

const Events = () => {
  const eventsContext = useContext(EventsContext)
  return (
    <Row className="row">
      {eventsContext.events.map(event => (
        <Col key={event.id} large={8} md={4} sm={4}>
          <Event
            className="col"
            title={event.name}
            image={event.images[0].url}
            time={event.dates.start.dateTime}
            eventId={event.id}
          />
        </Col>
      ))}
    </Row>
  )
}

export default Events
