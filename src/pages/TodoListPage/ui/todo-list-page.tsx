import { TodoCard } from 'entities/todo/ui/todo-card';
import { useGetAllTodoQuery } from 'shared/api';
import { schemaTodo } from 'shared/interfaces';
import { ErrorPage } from 'widgets/error-page';
import { Spinner } from 'widgets/spinner';

const TodoListPage = () => {
  const { isError, isLoading, currentData } = useGetAllTodoQuery('');

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  if (!(Array.isArray(currentData) && currentData.length > 0)) {
    return <h1>No data...</h1>;
  }

  /* Zod Validation */
  schemaTodo.array().parse(currentData);

  return (
    <>
      <Spinner isLoading={isLoading} />
      <ul className=''>
        {currentData.map(({ completed, id, title }) => {
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
    </>
  );
};

export default TodoListPage;
