import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"

const Event = ({ image, title, time, eventId }) => {
  return (
    // </div>
    <div className="card flex-column">
      <img className="card-img-top" src={image} alt="" />
      <div className="card card-body h-100 flex-column">
        <h4 className="card-title h-100">{title}</h4>
        <p className="card-text ">{time}</p>
        <Link to={`/event/${eventId}`} className="btn btn-dark">
          Details
        </Link>
      </div>
    </div>
  )
}

export default Event
