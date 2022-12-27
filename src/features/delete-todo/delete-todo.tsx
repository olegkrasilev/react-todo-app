import React from 'react';

import { useDeleteTodoByIdMutation } from 'shared/api/todo';
import { TodoModel } from 'shared/interfaces';
import { ErrorPage } from 'widgets/error-page';
import { Spinner } from 'widgets/spinner';

type ID = Pick<TodoModel, 'id'>;

export const DeleteTodo = ({ id }: ID) => {
  const [deleteTodoByID, { isLoading, error }] = useDeleteTodoByIdMutation();

  const handleDeleteTodo = async (id: number) => {
    await deleteTodoByID(id);
  };

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <button
      onClick={() => void handleDeleteTodo(id)}
      id={String(id)}
    >
      Delete
    </button>
  );
};
