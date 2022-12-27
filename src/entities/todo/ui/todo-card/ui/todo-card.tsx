import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';

import css from './todo-card.module.scss';

import { TodoModel } from 'shared/interfaces';
import { DeleteTodo } from 'features/delete-todo';

export const TodoCard = ({ completed, id, title }: TodoModel) => {
  const navigate = useNavigate();

  return (
    <li className={classNames({ completed: completed })}>
      {title} <br />
      <DeleteTodo id={id} />
      <button
        onClick={() => navigate(`/${id}`)}
        id={String(id)}
      >
        More
      </button>
    </li>
  );
};
