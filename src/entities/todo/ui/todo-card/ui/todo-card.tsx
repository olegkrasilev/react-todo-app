import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';

import css from './todo-card.module.scss';

import { TodoModel } from 'shared/interfaces';

export const TodoCard = ({ completed, id, title }: TodoModel) => {
  const navigate = useNavigate();

  return (
    <li className={classNames({ completed: completed })}>
      {title} <br />
      <button id={String(id)}>Delete</button>
      <button
        onClick={() => navigate(`/${id}`)}
        id={String(id)}
      >
        More
      </button>
    </li>
  );
};
