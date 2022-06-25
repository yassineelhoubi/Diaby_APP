import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: "https://diaby-tracker.herokuapp.com/"
}) ;

export const api = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({})
});