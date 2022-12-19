import { useGetAllTodoQuery } from 'shared/api';
import { schemaTodo } from 'shared/interfaces';
import { ErrorPage } from 'widgets/error-page';
import { Spinner } from 'widgets/spinner';

const TodoListPage = () => {
  const { data, error, isLoading } = useGetAllTodoQuery('20');

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
          <li
            id={String(id)}
            key={id}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListPage;
