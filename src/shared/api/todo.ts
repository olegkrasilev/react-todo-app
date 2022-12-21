import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from 'shared/config/axios';
import { TodoModel } from 'shared/interfaces';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllTodo: builder.query<TodoModel[], string>({
      query: (limit: string) => {
        return {
          url: `/todos?_start=0&_limit=${limit}`,
        };
      },
    }),
    getTodoByID: builder.query<TodoModel, string>({
      query: (id: string) => {
        return {
          url: `todos/${id}`,
        };
      },
    }),
  }),
});

export const { useGetAllTodoQuery, useGetTodoByIDQuery } = todoApi;
