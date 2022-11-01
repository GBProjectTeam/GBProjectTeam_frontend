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

    let result
        = args.url === '/auth/signin' || args.url === '/auth/signup'
            ? await baseQuery(args, api, extraOptions)
            : await baseQuery(
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

    if (result.error || result.data.error) {
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
    }),
})

export const {
    endpoints,
    useLoginMutation,
    useRegistrationMutation,
    useUpdateUserMutation,
} = api
