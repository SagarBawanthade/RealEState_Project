import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/userSlice.js";

// Combine Reducers
const rootReducer = combineReducers({
    user: userReducer,
});

// Persist Configuration
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable for all reducers (use with caution)
        }),
});

// Create Persistor
const persistor = persistStore(store);

export { store, persistor };
