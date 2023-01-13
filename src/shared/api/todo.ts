import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from 'shared/config/axios';
import { TodoModel } from 'shared/interfaces';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getAllTodo: builder.query<TodoModel[], string>({
      query: () => {
        return {
          url: `/todo`,
        };
      },
      providesTags: ['Todo'],
    }),
    getTodoByID: builder.query<TodoModel, number>({
      query: (id: number) => {
        return {
          url: `todo/${id}`,
        };
      },
      providesTags: ['Todo'],
    }),
    deleteTodoById: builder.mutation({
      query: (id: number) => {
        return {
          url: `/todo/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Todo'],
    }),
    toggleTodoStatus: builder.mutation<void, Omit<TodoModel, 'title'>>({
      query: ({ id, completed }) => {
        return {
          url: `/todo/${id}`,
          method: 'PATCH',
          data: { completed },
        };
      },
      invalidatesTags: ['Todo'],
    }),
    addNewTodo: builder.mutation<void, Omit<TodoModel, 'id'>>({
      query: ({ title, completed }) => {
        return {
          url: '/todo/',
          method: 'POST',
          data: { title, completed },
        };
      },
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetAllTodoQuery,
  useGetTodoByIDQuery,
  useDeleteTodoByIdMutation,
  useToggleTodoStatusMutation,
  useAddNewTodoMutation,
} = todoApi;
