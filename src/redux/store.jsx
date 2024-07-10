import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import productReducer from './slices/productSlice'
import basketReducer from './slices/basketSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        app: appReducer,
        product: productReducer,

    },
})