import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import {reducer as grocery} from "../Redux/Grocery/reducer"
import {reducer as faishion} from "../Redux/Fashion/reducer"
import {reducer as applince} from "../Redux/Applince/reducer"
import thunk from "redux-thunk"
let mainreducer=combineReducers({grocery,faishion,applince})

export const store=legacy_createStore(mainreducer,applyMiddleware(thunk))