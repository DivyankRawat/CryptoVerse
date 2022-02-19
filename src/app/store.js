import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi'

export const store = configureStore({
    // Added crypto api in store
    reducer: { [cryptoApi.reducerPath]: cryptoApi.reducer },
})