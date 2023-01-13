import React, { useState } from 'react';

import styles from './add-todo.module.scss';

import { useAddNewTodoMutation } from 'shared/api/todo';
import { ErrorPage } from 'widgets/error-page';
import { Spinner } from 'widgets/spinner';

export const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [addNewTodo, { isLoading, error }] = useAddNewTodoMutation();

  const addNewTodoHandler = async (title: string) => {
    await addNewTodo({ title, completed: false });
  };

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <Spinner isLoading={isLoading} />
      <div className={styles.wrapper}>
        <input
          type='text'
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <button onClick={() => void addNewTodoHandler(title)}>
          Add new todo
        </button>
      </div>
    </>
  );
};
