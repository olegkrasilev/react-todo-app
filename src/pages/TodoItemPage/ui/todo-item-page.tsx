/* eslint-disable unicorn/no-null */
import { useParams } from 'react-router-dom';

import css from './todo-item-page.module.scss';

import { TodoCard } from 'entities/todo/ui/todo-card';
import { useGetTodoByIDQuery } from 'shared/api';

const TodoItemPage = () => {
  const { todoId } = useParams();

  // @TODO Add guards

  const { data } = useGetTodoByIDQuery(Number(todoId));

  if (!data) {
    return null;
  }

  const { completed, id, title } = data;

  return (
    <TodoCard
      id={id}
      completed={completed}
      title={title}
    />
  );
};

export default TodoItemPage;
