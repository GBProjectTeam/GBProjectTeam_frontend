import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'
import { loggedOut } from '../pages/LoginPage/loginSlice'
import { showAlert } from '../common/alert/showAlertSlice'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({ baseUrl: 'http://194.87.94.182' })

const baseQueryWithReauth = async (
    args,
    api,
    extraOptions,
) => {
    await mutex.waitForUnlock()

    const loginState = api.getState().login

    const getResult = async () => {
        switch (args.url) {
        case '/auth/signin':
        case '/auth/signup':
            return baseQuery(args, api, extraOptions)
        case '/documents/create':
            return baseQuery(
                {
                    ...args,
                    headers: {},
                },
                api,
                extraOptions,
            )
        case '/users/avatar':
            return baseQuery(
                {
                    ...args,
                    headers: {
                        'Authorization': `Bearer ${loginState.token}`,
                    },
                },
                api,
                extraOptions,
            )
        default:
            return baseQuery(
                {
                    ...args,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${loginState.token}`,
                    },
                },
                api,
                extraOptions,
            )
        }
    }

    let result = getResult()

    if (result.error || result.data?.error) {
        const errorMessage =
            result.error?.data?.message
            || JSON.stringify(result.error)
            || result.data.message

        api.dispatch(
            showAlert({
                isShowAlert: true,
                severity: 'error',
                message: errorMessage,
            }),
        )

        if (!mutex.isLocked()) {
            const release = await mutex.acquire()

            try {
                api.dispatch(
                    loggedOut(),
                )
            } finally {
                release()
            }
        } else {
            await mutex.waitForUnlock()

            result = await baseQuery(args, api, extraOptions)
        }
    }

    return result
}

export const api = createApi({
    baseQuery: baseQueryWithReauth,

    tagTypes: ['Projects', 'Project', 'ProjectsByFilter', 'Users', 'User'],

    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/signin',
                method: 'POST',
                body: credentials,
            }),
        }),
        registration: builder.mutation({
            query: (dataNewUser) => ({
                url: '/auth/signup',
                method: 'POST',
                body: dataNewUser,
            }),
        }),
        updateUser: builder.mutation({
            query: (dataUpdatedUser) => ({
                url: '/users',
                method: 'PATCH',
                body: dataUpdatedUser,
            }),

            invalidatesTags: (result) => (
                result ? ['Users', 'User'] : []
            ),
        }),
        createProject: builder.mutation({
            query: (createProjectData) => ({
                url: '/projects/create',
                method: 'POST',
                body: createProjectData,
            })
        }),
        getUsers: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET',
            }),

            providesTags: ['Users'],
        }),
        getUserById: builder.query({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),

            providesTags: ['User'],
        }),
        createDocument: builder.mutation({
            query: (documentData) => ({
                url: '/documents/create',
                method: 'POST',
                body: documentData,
            })
        }),
        updateProject: builder.mutation({
            query: (updateProjectData) => ({
                url: `/projects/update/${updateProjectData.projectId}`,
                method: 'PATCH',
                body: {
                    name: updateProjectData.name,
                    deadline: updateProjectData.deadline,
                    documentsIds: updateProjectData.documentsIds,
                    coordinationUsers: updateProjectData.coordinationUsers,
                },
            }),

            invalidatesTags: (result) => (
                result ? ['Projects', 'Project', 'ProjectsByFilter' ] : []
            ),
        }),
        getProjects: builder.query({
            query: () => ({
                url: '/projects',
                method: 'GET',
            }),

            providesTags: ['Projects'],
        }),
        getProjectById: builder.query({
            query: (id) => ({
                url: `/projects/${id}`,
                method: 'GET',
            }),

            providesTags: ['Project'],
        }),
        getProjectsByFilter: builder.query({
            query: (queryString) => ({
                url: `/projects/filter?${queryString}`,
                method: 'GET',
            }),

            providesTags: ['ProjectsByFilter'],
        }),
        getReferenceEnum: builder.query({
            query: (referenceEnum) => ({
                url: `/reference/enums/${referenceEnum}`,
                method: 'GET',
            })
        }),
        updateAvatar: builder.mutation({
            query: (avatar) => ({
                url: '/users/avatar',
                method: 'POST',
                body: avatar,
            }),

            invalidatesTags: (result) => (
                result ? ['User'] : []
            ),
        }),
        changeStatus: builder.mutation({
            query: (statusData) => ({
                url: '/projects/changeStatus',
                method: 'POST',
                body: statusData,
            }),

            invalidatesTags: (result) => (
                result ? ['Projects', 'Project', 'ProjectsByFilter'] : []
            ),
        }),
        addDecision: builder.mutation({
            query: (decisionData) => ({
                url: '/projects/addDecision',
                method: 'POST',
                body: decisionData,
            }),

            invalidatesTags: (result) => (
                result ? ['Projects', 'Project', 'ProjectsByFilter' ] : []
            ),
        }),
        deleteProject: builder.mutation({
            query: (projectId) => ({
                url: `/projects/delete/${projectId}`,
                method: 'DELETE',
            }),

            invalidatesTags: (result) => (
                result ? ['Projects', 'Project', 'ProjectsByFilter'] : []
            ),
        }),
    }),
})

export const {
    endpoints,
    useLoginMutation,
    useRegistrationMutation,
    useUpdateUserMutation,
    useGetUsersQuery,
    useGetUserByIdQuery,
    useCreateProjectMutation,
    useCreateDocumentMutation,
    useUpdateProjectMutation,
    useUpdateAvatarMutation,
    useGetProjectsQuery,
    useGetProjectByIdQuery,
    useGetReferenceEnumQuery,
    useChangeStatusMutation,
    useAddDecisionMutation,
    useDeleteProjectMutation,
    useGetProjectsByFilterQuery,
} = api
