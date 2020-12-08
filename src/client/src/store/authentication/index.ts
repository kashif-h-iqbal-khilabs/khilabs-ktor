import { createReducer, createAction, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import { DispatchProp } from 'react-redux'

export const ON_LOGIN_REQUEST = 'ON_LOGIN_REQUEST'
export const ON_LOGIN_RESPONSE = 'ON_RESPONSE_RESPONSE'

const initialState = {
    isAuthenticated: false,
    isLoading: false
}

type onLoginRequestType = {
    username: string,
    password: string
}

type onLoginResponseType = {
    isAuthenticated: boolean
}

const onLoginRequest = createAction(ON_LOGIN_REQUEST)
const onLoginResponse = createAction<onLoginResponseType>(ON_LOGIN_RESPONSE)

export const authenticationReducer = createReducer(initialState, {
    [onLoginRequest.type]: (state) => ({ ...state, isLoading: true }),
    [onLoginResponse.type]: (state, action: PayloadAction<onLoginResponseType>) => ({ ...state, isLoading: false, isAuthenticated: action.payload.isAuthenticated })
})



export const onLoginRequestThunk = (onloginRequest: onLoginRequestType) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: onloginRequest.username, password: onloginRequest.password })
    };


    return async function (dispatch: any) {

        try {
            let response = await fetch('/login', requestOptions);

            let responseJSON: onLoginResponseType = await response.json()

            dispatch({
                type: ON_LOGIN_RESPONSE,
                payload: { isAuthenticated: responseJSON.isAuthenticated }
            })

        } catch (error) {
            dispatch({
                type: ON_LOGIN_RESPONSE,
                payload: { isAuthenticated: false }
            })
        }
    }
}