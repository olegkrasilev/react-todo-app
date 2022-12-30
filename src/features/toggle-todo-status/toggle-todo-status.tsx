import React from 'react';

import { ErrorPage } from 'widgets/error-page';
import { Spinner } from 'widgets/spinner';
import { useToggleTodoStatusMutation } from 'shared/api/todo';
import { TodoModel } from 'shared/interfaces';

type TodoStatus = Omit<TodoModel, 'title'>;

export const ToggleTodoStatus = ({ id, completed }: TodoStatus) => {
  const [toggleStatus, { isLoading, error }] = useToggleTodoStatusMutation();

  const handleToggleTodo = async (id: number, completed: boolean) => {
    await toggleStatus({ id, completed });
  };

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <button onClick={() => void handleToggleTodo(id, !completed)}>
      Toggle Status
    </button>
  );
};
