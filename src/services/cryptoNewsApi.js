// Similar to cryptoApi with minor changes and new Api.. ie. Bing News Api 

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '3c14bdaa6dmshcac4cf93b5076aap16d019jsna1f59ad00306',
};
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// From Documentation
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            // The count is taken from the cryptocurrencies.jsx
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;