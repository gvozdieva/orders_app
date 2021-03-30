import {ActionTypes} from "../constants/constants";

const initialState = {
  loading: false,
  error: false,
  positions: []
}

export default function positions(state = initialState, action) {
  switch (action.type){
    case ActionTypes.GET_POSITIONS_ORDER:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.GET_POSITIONS_ORDER_SUCCESS:
      return {
        ...state,
        loading: true,
        positions: action.payload
      }
    case ActionTypes.GET_POSITIONS_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}