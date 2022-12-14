import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from 'shared/config/axios';
import { TodoModel } from 'shared/interfaces/todo';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllTodo: builder.query<TodoModel, string>({
      query: () => {
        return {
          url: 'todo',
        };
      },
    }),
    getTodoByID: builder.query<TodoModel, string>({
      query: (id: string) => {
        return {
          url: `todo/${id}`,
        };
      },
    }),
  }),
});

export const { useGetAllTodoQuery, useGetTodoByIDQuery } = todoApi;
