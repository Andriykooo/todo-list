import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// @ts-ignore
import { todosReducer } from './app.tsx';
// @ts-ignore
import { todoFormReducer } from './todoForm.ts';

const reducer = combineReducers({
  todos: todosReducer,
  todoForm: todoFormReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;

export type RootState = ReturnType<typeof reducer>
