import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import {reducer as grocery} from "../Redux/Grocery/reducer"
import thunk from "redux-thunk"
let mainreducer=combineReducers({grocery})

export const store=legacy_createStore(mainreducer,applyMiddleware(thunk))