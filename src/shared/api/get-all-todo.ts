/* eslint-disable indent */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from 'shared/config/axios/axios-base-query';

import { TodoModel } from 'shared/interfaces/todo';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllTodos: builder.query<TodoModel, string>({
      query: () => {
        return {
          url: 'todo',
        };
      },
    }),
  }),
});

export const { useGetAllTodosQuery } = todoApi;
