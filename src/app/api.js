import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: "https://diaby-tracker.herokuapp.com/",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().user.token
    
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization',  `Bearer ${token.token}`)
        }
    
        return headers
      },
});

export const api = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({})
});