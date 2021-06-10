import React, { useState } from 'react';

export const TodoList = ({ todos, setTodos }) => {
  const [addTodoField, setAddTodoField] = useState('');

  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  setTodos(prevState => prevState
                    .map(completedTodo => (completedTodo.id === todo.id
                      ? {...completedTodo, completed: !todo.completed}
                      : completedTodo)
                    )
                  );
                }}
              />
            </label>
            {todo.text}
            <button
              type="button"
              onClick={() => {
                setTodos(todos
                  .filter(currentTodo => todo.id !== currentTodo.id)
                );
              }}
            >X</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault();

          if (!addTodoField) {
            return;
          };

          setTodos(prevTodos => (
            [
              ...prevTodos,
              {
                text: addTodoField,
                completed: false,
                id: prevTodos.length + 1,
              }
            ]
          ));
          setAddTodoField('');
        }}
      >
        <label>
          <input
            type="text"
            name="todo"
            placeholder="Add todo"
            value={addTodoField}
            onChange={event => {
              setAddTodoField(event.target.value);
            }}
          >
          </input>
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  )
};
