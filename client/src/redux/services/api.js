import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import store from "../store/store"

import URL from "./backendUrl"

export const api = createApi({
    reducerPath: "userApi",
	baseQuery: fetchBaseQuery({ 
        baseUrl: URL,
        prepareHeaders: (headers) => {
            const token = store.getState().login?.token
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
            return headers
        }
        return headers
        }
    }),
	tagTypes: ["Profile"],
	endpoints: (builder) => ({
		getAuth: builder.mutation({
			query: ( payload ) => ({
				url: "login",
				method: "POST",
				body: payload,
			}),
		}),
        getProfile: builder.query({
            query: () => ({
                url: "profile",
                method: "POST"
            }),
            providesTags: ["Profile"]
        }),
        updateProfile: builder.mutation({
            query: (payload) => ({
                url: "profile",
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["Profile"]
        })
	}),
})

export const { 
    useGetAuthMutation,
    useGetProfileQuery,
    useUpdateProfileMutation
 } = api

 export default api