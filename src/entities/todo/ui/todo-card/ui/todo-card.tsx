import classNames from 'classnames';

import css from './todo-card.module.scss';

import { TodoModel } from 'shared/interfaces';

export const TodoCard = ({ completed, id, title }: TodoModel) => {
  return (
    <li className={classNames({ completed: completed })}>
      {title} <br />
      <button id={String(id)}>Delete</button>
      <button id={String(id)}>More</button>
    </li>
  );
};
