/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TodoModel } from 'shared/interfaces/todo';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<TodoModel, string>({
      query: (query) => `${query}`,
    }),
  }),
});

export const { useGetAllTodosQuery } = todoApi;
