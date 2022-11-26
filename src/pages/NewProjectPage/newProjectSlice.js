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

        addDocsFromProject: (state, { payload }) => {
            const updatedDocs = [...state.projectDocs]
            const updatedDocsIds = []

            payload.map(
                (doc) => {
                    if (!updatedDocs.find(
                        (updDoc) => updDoc._id === doc._id
                    )) {
                        updatedDocs.push(doc)
                    }
                }
            )

            payload.map(
                (doc) => {
                    if (!updatedDocsIds.includes(doc._id)) {
                        updatedDocsIds.push(doc._id)
                    }
                }
            )

            state.projectDocs = updatedDocs
            state.project.documentsIds = updatedDocsIds
        },

        deleteDocFromProject: (state, { payload: id }) => {
            const docForCreateIndex = state.project.documentsIds.findIndex(
                (item) => item === id
            )
            const docForShowIndex = state.projectDocs.findIndex(
                (item) => item._id === id
            )

            const newDocumentsIds = [...state.project.documentsIds]
            const newProjectDocs = [...state.projectDocs]

            if (docForCreateIndex !== -1 && docForShowIndex !== -1) {
                newDocumentsIds.splice(docForCreateIndex, 1)
                newProjectDocs.splice(docForShowIndex, 1)

                state.project.documentsIds = newDocumentsIds
                state.projectDocs = newProjectDocs
            }
        },

        removeData: (state) => {
            state.project = initialState.project
            state.projectDocs = initialState.projectDocs
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
                        _id: payload._id,
                        name: payload.attachedFileName
                    }
                    state.projectDocs.push(projectDoc)
                }
            )
            .addMatcher(
                api.endpoints.getProjectById.matchFulfilled,
                (state, { payload }) => {
                    state.project.projectId = payload[0]._id
                    state.project.deadline = payload[0].deadline
                    state.project.coordinationUsers = payload[0].coordinationUsers
                    state.project.name = payload[0].name
                    state.project.documentsIds = payload[0].documentsIds
                }
            )
    }
})

export const { saveNewProjectName, saveNewProjectDeadline, updateMembers, deleteDocFromProject, addDocsFromProject, removeData } = newProjectSlice.actions
export const newProjectSelector = (state) => state.newProject