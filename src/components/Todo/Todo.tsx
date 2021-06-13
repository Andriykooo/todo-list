import React from 'react';

import { useDispatch } from 'react-redux';
// @ts-ignore
import { appActions, TodoType } from '../../store/app.tsx';

export const Todo: React.FC = ({ todo }: any) => {
  const dispatch = useDispatch();

  const onChangeCompletedTodo = (todos: TodoType) => {
    dispatch(appActions.setTodos(todos));
  };

  const onClickDeleteTodo = (todoId: string) => {
    dispatch(appActions.deleteTodo(todoId));
  };

  return (
    <>
      <label className="todo-list__label">
        <input
          type="checkbox"
          className="todo-list__input"
          checked={todo.completed}
          onChange={() => {
            onChangeCompletedTodo(todo);
          }}
        />
        {todo.completed && <span className="todo-list__label-done">✔️</span>}
      </label>
      <p>{todo.completed ? <s>{todo.text}</s> : todo.text}</p>
      <button
        className="todo-button todo-button--delete"
        type="button"
        onClick={() => {
          onClickDeleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </>
  );
};
