import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'
import { loggedOut } from '../pages/LoginPage/loginSlice'

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
            return await baseQuery(args, api, extraOptions)
        case '/documents/create':
            return await baseQuery(
                {
                    ...args,
                    headers: {},
                },
                api,
                extraOptions,
            )
        default:
            return await baseQuery(
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

    if (result?.error || result.data?.error) {
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
            })
        }),
        createDocument: builder.mutation({
            query: (documentData) => ({
                url: '/documents/create',
                method: 'POST',
                body: documentData,
            })
        }),
    }),
})

export const {
    endpoints,
    useLoginMutation,
    useRegistrationMutation,
    useUpdateUserMutation,
    useGetUsersQuery,
    useCreateProjectMutation,
    useCreateDocumentMutation,
} = api
