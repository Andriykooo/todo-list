const DELETE_TODO = 'app/DELETE_TODO';
const ADD_TODO = 'app/ADD_TODO';
const SET_COMPLETED_TODO = 'app/SET_TODOS';
const SET_SEARCH_FIELD = 'app/SET_SEARCH_FIELD';
const SET_FILTER_TODO_BY = 'app/SET_FILTER_TODO_BY';

export type TodoType = {
  text: string,
  completed: boolean,
  id: number,
};

export interface RootState {
  filterTodoBy: string,
  todos: TodoType[],
  searchField: string,
}

export const appActions = {
  deleteTodo: (todoId: string) => ({ type: DELETE_TODO, payload: todoId }),
  addTodo: (addTodoField: string) => ({ type: ADD_TODO, payload: addTodoField }),
  setTodos: (todo: TodoType) => ({ type: SET_COMPLETED_TODO, payload: todo }),
  setSearchField: (searchField: string) => ({ type: SET_SEARCH_FIELD, payload: searchField }),
  setFilterTodoBy: (filterTodoBy: string) => ({ type: SET_FILTER_TODO_BY, payload: filterTodoBy }),
};

interface AppState {
  todos: TodoType[],
  searchField: string,
  filterTodoBy: string,
}

interface DeleteTodo {
  type: 'app/DELETE_TODO',
  payload: string,
}

interface AddTodo {
  type: 'app/ADD_TODO',
  payload: string,
}

interface SetTodos {
  type: 'app/SET_TODOS',
  payload: TodoType,
}

interface SetSearchField {
  type: 'app/SET_SEARCH_FIELD',
  payload: string,
}

interface SetFilterTodoBy {
  type: 'app/SET_FILTER_TODO_BY',
  payload: string,
}

type Action = DeleteTodo | AddTodo | SetSearchField | SetFilterTodoBy | SetTodos

const initialState: AppState = {
  todos: [],
  searchField: '',
  filterTodoBy: 'all',
};

export const todosReducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos].filter((currentTodo) => +action.payload !== currentTodo.id),
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, {
          text: action.payload,
          completed: false,
          id: state.todos.length + 1,
        }],
      };
    }
    case SET_COMPLETED_TODO:
      return {
        ...state,
        todos: [...state.todos]
          .map((completedTodo) => (completedTodo.id === action.payload.id
            ? { ...completedTodo, completed: !action.payload.completed }
            : completedTodo)),
      };
    case SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
      };
    case SET_FILTER_TODO_BY:
      return {
        ...state,
        filterTodoBy: action.payload,
      };
    default:
      return state;
  }
};
