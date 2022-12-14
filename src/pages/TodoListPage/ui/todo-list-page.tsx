/* eslint-disable unicorn/no-null */
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import css from './todo-list-page.module.scss';

import { useGetAllTodoQuery } from 'shared/api';
import { ErrorPage } from 'widgets/error-page';

const TodoListPage = () => {
  const { data, error, isLoading } = useGetAllTodoQuery('');

  if (!data) {
    return <ErrorPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
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
