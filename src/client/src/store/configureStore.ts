import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { authenticationReducer } from "./authentication";


const store = configureStore({
    reducer: {
        authentication: authenticationReducer
    },
    middleware: [thunk, logger]
})

export default store