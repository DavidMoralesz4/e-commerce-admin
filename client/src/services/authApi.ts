import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:8181/api/auth'

interface User {
    id: number
    firstName: string
    lastName: string
    document: string
    email: string
    password: string
}

interface DataResponse {
    success: boolean
    message: string
    data?: User[]
}

interface CredentialsRequest {
    email: string
    password: string
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        loginUser: builder.mutation<DataResponse, CredentialsRequest>({
            query: (credentials) => {
                return {
                    url: '/login',
                    body: credentials,
                    credentials: "include",
                    method: "POST"
                }
            }
        }),
        logoutUser: builder.mutation<DataResponse, void>({
            query: () => {
                return {
                    url: '/logout',
                    credentials: "include",
                    method: "POST"
                }
            }
        })
    })
})

export const { useLoginUserMutation, useLogoutUserMutation } = authApi