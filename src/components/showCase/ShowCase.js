import React from "react";
//import backgroundImg from "../../assets/showcase.jpg";
import EventsContext from "../../context/events/eventsContext";

const ShowCase = () => {
  const eventsContext = React.useContext(EventsContext);
  if (eventsContext.showCase) {
    return (
      <div>
        <h5>Search events.</h5>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ShowCase;
