import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import {reducer as grocery} from "../Redux/Grocery/reducer"
import {reducer as faishion} from "../Redux/Fashion/reducer"
import {reducer as applince} from "../Redux/Applince/reducer"

import thunk from "redux-thunk"

const rootReducer = combineReducers({
            authReducer,grocery,faishion,applince
    
  });

//   const myMiddleWare = store => dispatch => action => {
//     console.log("in myMiddleWare")
//     if (typeof action === "function") {
//       return action(dispatch)
//     }

//     return dispatch(action)
// }


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))