import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";

import AuthReducer from "./Auth/authSlice"
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    auth : AuthReducer,

})

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)
