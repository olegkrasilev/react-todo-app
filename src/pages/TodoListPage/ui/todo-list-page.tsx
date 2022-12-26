import { TodoCard } from 'entities/todo/ui/todo-card';
import { useGetAllTodoQuery, useGetTodoByIDQuery } from 'shared/api';
import { schemaTodo } from 'shared/interfaces';
import { ErrorPage } from 'widgets/error-page';
import { Spinner } from 'widgets/spinner';

const TodoListPage = () => {
  const { data, error, isLoading } = useGetAllTodoQuery('');

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  if (!data) {
    return <ErrorPage />;
  }

  /* Zod Validation */
  schemaTodo.array().parse(data);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <ul className=''>
      {data.map(({ completed, id, title }) => {
        return (
          <TodoCard
            key={id}
            id={id}
            completed={completed}
            title={title}
          />
        );
      })}
    </ul>
  );
};

export default TodoListPage;
