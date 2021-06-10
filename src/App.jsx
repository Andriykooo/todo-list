import React, { useState } from 'react';

import './App.scss';

import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filterTodoBy, setFilterTodoBy] = useState('');

  let preparedTodos = todos.filter(todo => {
    switch (filterTodoBy) {
      case 'active':
        return todo.completed === false;
      case 'completed':
        return todo.completed === true;
      default:
        return todo;
    };
  });

  preparedTodos = preparedTodos.filter(todo => todo.text.includes(searchField));

  return (
    <section className="todo">
      <div className="todo__wrapper">
        <h1 className="app__title">TODO</h1>
        <div className="todo-search">
          <form>
          <label>
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchField}
              onChange={event => {
                setSearchField(event.target.value);
              }}
            />
          </label>
          </form>
        </div>
        <button
          type="button"
          onClick={() => setFilterTodoBy('all')}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilterTodoBy('active')}
        >
          Active
        </button>
        <button
          type="button"
          onClick={() => setFilterTodoBy('completed')}
        >
          Completed
        </button>
        <div className="todo-list">
          <TodoList
            todos={preparedTodos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
