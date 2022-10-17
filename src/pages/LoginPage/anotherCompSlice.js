import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const anotherCompSlice = createSlice({
    name: 'anotherComp',

    initialState,

    reducers: {
        setAnotherComp: (state) => {
            state.anotherComp = true
        },
    },
})

export const { setAnotherComp } = anotherCompSlice.actions
export const anotherCompSelector = (state) => state.anotherComp.anotherComp
