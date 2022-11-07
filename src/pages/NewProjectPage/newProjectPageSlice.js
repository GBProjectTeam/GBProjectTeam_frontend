import { createSlice } from '@reduxjs/toolkit'
import { api } from '../../store/api'

const initialState = {
    dataForCreateNewProject: {
        projectId: '',
        projectName: '',
        deadline: '',
        coordinationUsersIds: [],
        documentsIds: [],
    },
    projectDocs: []
}

export const newProjectPageSlice = createSlice({
    name: 'newProjectPage',

    initialState,

    reducers: {
        saveNewProjectFormValues: (state, { payload }) => {
            state.dataForCreateNewProject[payload.name] = payload.value
        },

        addUserId: (state, { payload: id }) => {
            state.dataForCreateNewProject.coordinationUsersIds.push(id)
        },

        deleteDocFromProject: (state, { payload: id }) => {
            const docForCreateIndex = state.dataForCreateNewProject.documentsIds.findIndex(
                (item) => item === id
            )
            const docForShowIndex = state.projectDocs.findIndex(
                (item) => item.id === id
            )
            if (docForCreateIndex !== -1 && docForShowIndex !== -1) {
                state.dataForCreateNewProject.documentsIds.splice(docForCreateIndex, 1)
                state.projectDocs.splice(docForShowIndex, 1)
            }
        }
    },

    extraReducers(builder) {
        builder
            .addMatcher(
                api.endpoints.createProject.matchFulfilled,
                (state, { payload }) => {
                    state.dataForCreateNewProject.projectId = payload._id
                }
            )
            .addMatcher(
                api.endpoints.createDocument.matchFulfilled,
                (state, { payload }) => {
                    state.dataForCreateNewProject.documentsIds.push(payload._id)
                    const projectDoc = {
                        id: payload._id,
                        name: payload.attachedFileName
                    }
                    state.projectDocs.push(projectDoc)
                }
            )
    }
})

export const { saveNewProjectFormValues, addUserId, deleteDocFromProject } = newProjectPageSlice.actions
export const newProjectPageSelector = (state) => state.newProjectPage