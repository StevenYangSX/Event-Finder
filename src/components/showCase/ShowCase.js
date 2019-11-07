import React from "react"
import backgroundImg from "../../assets/showcase.jpg"
import EventsContext from "../../context/events/eventsContext"

const ShowCase = () => {
  const eventsContext = React.useContext(EventsContext)
  if (eventsContext.showCase) {
    return (
      <div>
        <img src={backgroundImg} alt="" />
      </div>
    )
  } else {
    return <div></div>
  }
}

export default ShowCase
