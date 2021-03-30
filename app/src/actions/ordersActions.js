import {ActionTypes} from "../constants/constants";

export const getOrders = (value) => ({
  type: ActionTypes.GET_ORDERS,
  value
})

export const getOrdersSuccess = (payload) => ({
  type: ActionTypes.GET_ORDERS_SUCCESS,
  payload
})

export const getOrdersFailure = (payload) => ({
  type: ActionTypes.GET_ORDERS_FAILURE,
  payload
})

export const getPositionsOrder  = (payload) => ({
  type: ActionTypes.GET_POSITIONS_ORDER,
  payload
})

export const getPositionsOrderSuccess  = (payload) => ({
  type: ActionTypes.GET_POSITIONS_ORDER_SUCCESS,
  payload
})

export const getPositionsOrderFailure  = (payload) => ({
  type: ActionTypes.GET_POSITIONS_ORDER_FAILURE,
  payload
})