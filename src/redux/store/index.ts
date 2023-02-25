import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeReducer';
import EncryptedStorage from 'react-native-encrypted-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import authReducer from '../reducers/authReducer';
import { apiService } from '../services/apiService';
import loadingReducer from '../reducers/loadingReducer';

// config redux-persist
const persistConfig = {
    key: 'root',
    storage: EncryptedStorage,
    timeout: 30000,
    whitelist: ['counter'],
    stateReconciler: autoMergeLevel2,
};

// reducers
const rootReducer = combineReducers({
    themeApp: themeReducer,
    auth: authReducer,
    loading: loadingReducer,
});

type RootState = ReturnType<typeof rootReducer>;
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

// store
export const store = configureStore({
    reducer: {
        root: persistedReducer,
        [apiService.reducerPath]: apiService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(apiService.middleware),
});

export const persistor = persistStore(store);
