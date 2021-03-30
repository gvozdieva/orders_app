import {ActionTypes} from "../constants/constants";

const initialState = {
  loading: false,
  error: false,
  orders: []
}

export default function orders(state = initialState, action) {
  switch (action.type){
    case ActionTypes.GET_ORDERS:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload.map((item) => {
          return {
            ...item,
            isOpen: false
          }
        })
      }
    case ActionTypes.GET_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}