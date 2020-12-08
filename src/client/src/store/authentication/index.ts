import {createReducer, createAction} from '@reduxjs/toolkit'

export const ON_LOGIN = 'ON_LOGIN'

const initialState = {
    isAuthenticated: false,
    isLoading: false
}

type stateType = {
    username: string,
    password: string
}

const onLogin = createAction<stateType>(ON_LOGIN)

export const authenticationReducer = createReducer(initialState, {
    [onLogin.type]: (state) => ({...state, isLoading: true})
})