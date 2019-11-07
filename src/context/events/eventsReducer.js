import {
  SET_EVENTS,
  SET_LOADING,
  SET_KEYWORD,
  SET_SHOWCASE,
  SET_EVENT,
  RESET_LOADING
} from "../types"

export default (state, action) => {
  switch (action.type) {
    case RESET_LOADING:
      return {
        ...state,
        loading: true
      }

    case SET_EVENT:
      return {
        ...state,
        event: action.payload,
        loading: false
      }
    case SET_SHOWCASE:
      return {
        ...state,
        showCase: false
      }
    case SET_KEYWORD:
      return {
        ...state,
        keyWord: action.payload
      }
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
