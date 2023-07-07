import {legacy_createStore as createStore} from "redux"
import { combineReducers } from "redux"
import { productReducer, selectedProductReducer } from "./reducer"

const reducers =combineReducers({allProducts:productReducer,product:selectedProductReducer})
export const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())