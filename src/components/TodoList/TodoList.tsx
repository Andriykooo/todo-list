import React from 'react';

// @ts-ignore
import { TodoTypes } from '../../store/app.tsx';

// @ts-ignore
import { Todo } from '../Todo/Todo.tsx';
// @ts-ignore
import { TodoForm } from '../TodoForm/TodoForm.tsx';

export const TodoList: React.FC = ({ todos }: any) => (
  <>
    <ul className="todo-list__list">
      {todos.map((todo: TodoTypes) => (
        <li
          key={todo.id}
          className="todo-list__item"
        >
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
    <TodoForm />
  </>
);
