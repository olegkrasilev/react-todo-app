/* eslint-disable unicorn/prefer-spread */
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { todoApi } from 'shared/api';

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);
