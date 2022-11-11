import storage from 'redux-persist/lib/storage'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { api } from './api.js'
import { loginSlice } from '../pages/LoginPage/loginSlice'
import { anotherCompSlice } from '../pages/LoginPage/anotherCompSlice'
import { newProjectSlice } from '../pages/NewProjectPage/newProjectSlice.js'
import { showAlertSlice } from '../common/Alert/showAlertSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    [loginSlice.name]: loginSlice.reducer,
    [anotherCompSlice.name]: anotherCompSlice.reducer,
    [newProjectSlice.name]: newProjectSlice.reducer,
    [showAlertSlice.name]: showAlertSlice.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [loginSlice.name],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(api.middleware),
})

export const persistor = persistStore(store)
