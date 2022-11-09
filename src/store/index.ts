import { combineReducers, configureStore } from '@reduxjs/toolkit';

import blogSlice from './reducers/blogSlice';

export const rootReducer = combineReducers({ blogSlice });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
