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
        builder
            .addMatcher(
                api.endpoints.login.matchFulfilled,
                (state, { payload }) => {
                    state.email = payload.user.email
                    state.token = payload.token
                    state.lastName = payload.user.lastName
                    state.firstName = payload.user.firstName
                    state.patronymicName = payload.user?.patronymicName || ''
                    state.userId = payload.user._id
                    state.avatar = `http://194.87.94.182/users/${payload.user._id}/avatar`
                },
            )
            .addMatcher(
                api.endpoints.updateUser.matchFulfilled,
                (state, { payload }) => {
                    state.email = payload.email
                    state.lastName = payload.lastName
                    state.firstName = payload.firstName
                    state.patronymicName = payload?.patronymicName || ''
                },
            )
    },
})

export const { loggedOut, doRememberMe } = loginSlice.actions
export const loginSelector = (state) => state.login
