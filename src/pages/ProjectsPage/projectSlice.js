import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    project: {
        projectId: '',
        decision: null,
        status: null,
    }
}

export const projectSlice = createSlice({
    name: 'project',

    initialState,

    reducers: {
        saveProject: (state, { payload }) => {
            state.project = payload
        }
    }
})

export const { saveProject } = projectSlice.actions
export const projectSelector = (state) => state.project