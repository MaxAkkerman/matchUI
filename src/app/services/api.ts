import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://app.ftoyd.com/fronttemp-service',
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
    baseQuery: baseQueryWithRetry,
    endpoints: () => ({}),
})
