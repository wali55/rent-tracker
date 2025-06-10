import { combineReducers } from "redux";
import rentReducer from "./rents/rentReducer";

const rootReducer = combineReducers({
    rents: rentReducer
})

export default rootReducer;