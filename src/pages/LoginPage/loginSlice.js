import { createSlice } from '@reduxjs/toolkit'
import { api } from '../../store/api'

const initialState = {
    email: null,
    token: null,
}

export const loginSlice = createSlice({
    name: 'login',

    initialState,

    reducers: {
        loggedOut: (state) => {
            state.rememberMe = false
            state.email = null
            state.token = null
        },

        doRememberMe: (state) => {
            state.rememberMe = true
        },
    },

    extraReducers(builder) {
        builder.addMatcher(
            api.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.email = payload.email
                state.token = payload.token
            },
        )
    },
})

export const { loggedOut, doRememberMe } = loginSlice.actions
export const loginSelector = (state) => state.login
