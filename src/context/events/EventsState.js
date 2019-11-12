import React, { useReducer } from "react";
import EventsContext from "./eventsContext";
import EventsReducer from "./eventsReducer";
import { SET_EVENTS, SET_LOADING, SET_KEYWORD, SET_SHOWCASE } from "../types";

const EventsState = props => {
  const initialState = {
    events: [],
    keyWord: "",
    loading: false,
    showCase: true,
    event: {}
  };

  const [state, dispatch] = useReducer(EventsReducer, initialState);

  //get events
  //Function to search all envents from input
  const onChange = e => {
    //setKeyword(e.target.value)
    dispatch({ type: SET_KEYWORD, payload: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setLoading();
    const classificationId = ["KZFzniwnSyZfZ7v7nJ"];
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${state.keyWord}&classificationId=${classificationId}&sort=date,asc&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg`
    );
    const res = await response.json();
    setShowCase();
    if (res._embedded !== undefined) {
      dispatch({ type: SET_EVENTS, payload: res._embedded.events });
    } else {
      const emptydata = [];
      dispatch({ type: SET_EVENTS, payload: emptydata });
    }
  };

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //set showcase
  const setShowCase = () => dispatch({ type: SET_SHOWCASE });
  return (
    <EventsContext.Provider
      value={{
        events: state.events,
        event: state.event,
        loading: state.loading,
        showCase: state.showCase,
        keyword: state.keyWord,
        onSubmit,
        onChange
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};

export default EventsState;
