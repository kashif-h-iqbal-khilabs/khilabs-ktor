import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { authenticationReducer } from "./authentication";


const rootReducer = combineReducers({
    authentication: authenticationReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger]
})

export default store