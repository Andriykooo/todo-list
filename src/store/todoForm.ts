const SET_ADD_TODO_FIELD = 'todoForm/SET_ADD_TODO_FIELD';

interface SetAddTodoField {
  type: 'todoForm/SET_ADD_TODO_FIELD',
  payload: string,
}

type Action = SetAddTodoField

export const todoFormActions = {
  setAddTodoField: (addTodoField: string) => ({ type: SET_ADD_TODO_FIELD, payload: addTodoField }),
};

const initialState = {
  addTodoField: '',
};

export const todoFormReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ADD_TODO_FIELD:
      return {
        ...state,
        addTodoField: action.payload,
      };
    default:
      return state;
  }
};
