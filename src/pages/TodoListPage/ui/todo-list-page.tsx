/* eslint-disable unicorn/no-null */
import { useState } from 'react';

import { useGetAllTodoQuery } from 'shared/api';
import { ErrorPage } from 'widgets/error-page';
import { Spinner } from 'widgets/spinner';

const TodoListPage = () => {
  const [isLoading, setLoading] = useState(true);
  const { data, error } = useGetAllTodoQuery('');

  if (isLoading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return <Spinner loading={isLoading} />;
  }

  if (!data) {
    return <ErrorPage />;
  }

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
