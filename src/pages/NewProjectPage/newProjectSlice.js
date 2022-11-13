import { createSlice } from '@reduxjs/toolkit'
import { api } from '../../store/api'

const initialState = {
    project: {
        projectId: '',
        name: '',
        deadline: null,
        coordinationUsers: [],
        documentsIds: [],
    },
    projectDocs: []
}

export const newProjectSlice = createSlice({
    name: 'newProject',

    initialState,

    reducers: {
        saveNewProjectName: (state, { payload }) => {
            state.project.name = payload
        },

        saveNewProjectDeadline: (state, { payload }) => {
            state.project.deadline = payload
        },

        updateMembers: (state, { payload }) => {
            state.project.coordinationUsers = payload
        },

        deleteDocFromProject: (state, { payload: id }) => {
            const docForCreateIndex = state.project.documentsIds.findIndex(
                (item) => item === id
            )
            const docForShowIndex = state.projectDocs.findIndex(
                (item) => item.id === id
            )

            const newDocumentsIds = state.project.documentsIds
            const newProjectDocs = state.projectDocs

            if (docForCreateIndex !== -1 && docForShowIndex !== -1) {
                newDocumentsIds.splice(docForCreateIndex, 1)
                newProjectDocs.splice(docForShowIndex, 1)

                state.project.documentsIds = newDocumentsIds
                state.projectDocs = newProjectDocs
            }
        }
    },

    extraReducers(builder) {
        builder
            .addMatcher(
                api.endpoints.createProject.matchFulfilled,
                (state, { payload }) => {
                    state.project.projectId = payload._id
                }
            )
            .addMatcher(
                api.endpoints.createDocument.matchFulfilled,
                (state, { payload }) => {
                    state.project.documentsIds.push(payload._id)
                    const projectDoc = {
                        id: payload._id,
                        name: payload.attachedFileName
                    }
                    state.projectDocs.push(projectDoc)
                }
            )
    }
})

export const { saveNewProjectName, saveNewProjectDeadline, updateMembers, deleteDocFromProject } = newProjectSlice.actions
export const newProjectSelector = (state) => state.newProject