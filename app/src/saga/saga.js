import {call, put} from "redux-saga/effects";
import {fetchOrders} from "../api/api";
import {getOrdersFailure, getOrdersSuccess} from "../actions/ordersActions";

export default function* getOrdersSaga({value}) {
  try {
    const response = yield call(fetchOrders, value);
    yield put(getOrdersSuccess(response))
  }catch (e) {
    yield put(getOrdersFailure(e))
  }
}