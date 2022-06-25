import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.API_URL,
}) ;

export const api = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({})
});