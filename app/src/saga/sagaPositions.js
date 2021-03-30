import {put} from "redux-saga/effects";

import {fetchPositions} from "../api/api";
import {
  getPositionsOrderFailure, getPositionsOrderSuccess
} from "../actions/ordersActions";
import {call} from "redux-saga/effects";

export default function* sagaPositions({id}) {
  try{
    const response = yield call(fetchPositions, id)
    yield put(getPositionsOrderSuccess(response))
  } catch (e) {
    yield put(getPositionsOrderFailure(e))
  }
}