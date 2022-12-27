import classNames from 'classnames/bind';

import { useNavigate } from 'react-router-dom';

import styles from './todo-card.module.scss';

import { TodoModel } from 'shared/interfaces';
import { DeleteTodo } from 'features/delete-todo';

export const TodoCard = ({ completed, id, title }: TodoModel) => {
  const navigate = useNavigate();
  const cx = classNames.bind(styles);
  const className = cx({
    completed,
  });

  return (
    <li className={className}>
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
