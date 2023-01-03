/* eslint-disable unicorn/no-null */
import { useNavigate, useParams } from 'react-router-dom';

import css from './todo-item-page.module.scss';

import { TodoCard } from 'entities/todo/ui/todo-card';
import { useGetTodoByIDQuery } from 'shared/api';
import { Spinner } from 'widgets/spinner';
import { ErrorPage } from 'widgets/error-page';

const TodoItemPage = () => {
  const { todoId } = useParams();
  const navigate = useNavigate();

  const { data, isError, isLoading, error } = useGetTodoByIDQuery(
    Number(todoId),
  );

  if (error) {
    const convertErrorType = error as { status: number };

    if (convertErrorType.status === 404) {
      navigate('/');

      return null;
    }
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  if (!data) {
    return <h1>This item doesnt exist</h1>;
  }

  const { completed, id, title } = data;

  return (
    <>
      <Spinner isLoading={isLoading} />
      <TodoCard
        id={id}
        completed={completed}
        title={title}
      />
      <button onClick={() => navigate('/')}>Back</button>
    </>
  );
};

export default TodoItemPage;
