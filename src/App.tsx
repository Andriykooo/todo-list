import React from 'react';
import { useDispatch } from 'react-redux';

// @ts-ignore
import { useTypedSelector } from './hooks/useTypedSelector.ts';
// @ts-ignore
import { appActions, TodoType, RootState } from './store/app.tsx';

import './styles/utils/style.scss';

// @ts-ignore
import { TodoList } from './components/TodoList/TodoList.tsx';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const {
    filterTodoBy,
    todos,
    searchField,
  }: RootState = useTypedSelector((state: RootState) => state.todos);

  const onChangeSearchField = (query: string): void => {
    dispatch(appActions.setSearchField(query));
  };

  const onClickFilterTodoBy = (filterBy: string): void => {
    dispatch(appActions.setFilterTodoBy(filterBy));
  };

  const preparedTodos: TodoType[] = todos.filter((todo: TodoType) => {
    switch (filterTodoBy) {
      case 'active':
        return todo.completed === false;
      case 'completed':
        return todo.completed === true;
      default:
        return todo;
    }
  }).filter((todo: TodoType) => todo.text.includes(searchField));

  return (
    <section className="todo">
      <div className="todo__wrapper">
        <h1 className="todo__title">TODO</h1>
        <div className="todo-search">
          <form className="todo-search__form">
            <label className="todo-search__label">
              <input
                type="text"
                name="search"
                className="todo-search__input"
                placeholder="Search"
                value={searchField}
                onChange={(event) => {
                  onChangeSearchField(event.target.value);
                }}
              />
            </label>
          </form>
        </div>
        <div className="todo-button__wrapper">
          <button
            className={`todo-button ${(filterTodoBy === 'all') && 'todo-button--active'}`}
            type="button"
            onClick={() => onClickFilterTodoBy('all')}
          >
            All
          </button>
          <button
            className={`todo-button ${(filterTodoBy === 'active') && 'todo-button--active'}`}
            type="button"
            onClick={() => onClickFilterTodoBy('active')}
          >
            Active
          </button>
          <button
            className={`todo-button ${(filterTodoBy === 'completed') && 'todo-button--active'}`}
            type="button"
            onClick={() => onClickFilterTodoBy('completed')}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          <TodoList todos={preparedTodos} />
        </div>
        <span>
          Tasks:&nbsp;
          {todos.length}
        </span>
      </div>
    </section>
  );
};

export default App;
