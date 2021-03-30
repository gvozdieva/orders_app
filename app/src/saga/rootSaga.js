import {all,debounce,takeLatest} from "redux-saga/effects";
import {ActionTypes} from "../constants/constants";
import getOrdersSaga from "./saga";
import sagaPositions from "./sagaPositions";

export default function* rootSaga() {
  yield all([
    debounce(300,ActionTypes.GET_ORDERS, getOrdersSaga),
    takeLatest(ActionTypes.GET_POSITIONS_ORDER, sagaPositions)
  ])
}