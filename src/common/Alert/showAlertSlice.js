import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowAlert: false,
}

export const showAlertSlice = createSlice({
    name: 'showAlert',

    initialState,

    reducers: {
        showAlert: (state, { payload }) => {
            state.isShowAlert = true
            state.severity = payload.severity
            state.message = payload.message
        },

        hideAlert: (state) => {
            state.isShowAlert = false
            state.severity = undefined
            state.message = undefined
        },
    },
})

export const { showAlert, hideAlert } = showAlertSlice.actions
export const showAlertSelector = (state) => state.showAlert
