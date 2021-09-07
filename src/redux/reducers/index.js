import { combineReducers } from "redux";
import tabletReducer from "./tabletReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers({ tabletReducer, cartReducer });
