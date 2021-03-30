import {combineReducers} from "redux";
import orders from "./orderReducer";
import positions from "./positionsReducer";

export default combineReducers({
  orders,
  positions
})