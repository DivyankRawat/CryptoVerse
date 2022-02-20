// use Query Documentation Page from Redux Toolkit Documentation for basic layout and understanding

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Added From Rapid Api : CoinRankingAPI
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3c14bdaa6dmshcac4cf93b5076aap16d019jsna1f59ad00306'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';


// This function automatically passes the headers inside the query
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

// From Documentation
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            // The count is taken from the cryptocurrencies.jsx
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
    }),
})


export const { useGetCryptosQuery } = cryptoApi