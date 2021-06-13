import React from 'react';

import { useDispatch } from 'react-redux';
// @ts-ignore
import { useTypedSelector } from '../../hooks/useTypedSelector.ts';

// @ts-ignore
import { todoFormActions } from '../../store/todoForm.ts';
// @ts-ignore
import { appActions, RootState } from '../../store/app.tsx';

export const TodoForm: React.FC = () => {
  const dispatch = useDispatch();

  const { addTodoField } = useTypedSelector((state: RootState) => state.todoForm);

  const onChangeAddTodoField = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(todoFormActions.setAddTodoField(event.target.value));
  };

  const onSubmitAddTodoField = (value: string): void => {
    dispatch(appActions.addTodo(addTodoField));
    dispatch(todoFormActions.setAddTodoField(value));
  };

  return (
    <form
      className="todo-search"
      onSubmit={(event) => {
        event.preventDefault();

        if (!addTodoField) {
          return;
        }

        onSubmitAddTodoField('');
      }}
    >
      <label className="todo-search__label">
        <input
          type="text"
          name="todo"
          maxLength={300}
          className="todo-search__input todo-search__input--add"
          placeholder="Add todo..."
          value={addTodoField}
          onChange={(event) => {
            onChangeAddTodoField(event);
          }}
        />
      </label>
      <button
        className="todo-button todo-button--add"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
