import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';

import css from './todo-card.module.scss';

import { TodoModel } from 'shared/interfaces';
import { useDeleteTodoByIdMutation } from 'shared/api/todo';

export const TodoCard = ({ completed, id, title }: TodoModel) => {
  const navigate = useNavigate();
  const [deleteTodoByID] = useDeleteTodoByIdMutation();

  // @Todo add this to features page
  const handleDeleteTodo = async (id: number) => {
    await deleteTodoByID(id);
  };

  return (
    <li className={classNames({ completed: completed })}>
      {title} <br />
      <button
        onClick={() => void handleDeleteTodo(id)}
        id={String(id)}
      >
        Delete
      </button>
      <button
        onClick={() => navigate(`/${id}`)}
        id={String(id)}
      >
        More
      </button>
    </li>
  );
};
