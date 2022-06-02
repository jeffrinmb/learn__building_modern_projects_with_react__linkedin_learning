import { createSelector } from 'reselect';

export const getTodos = state => {
  return state.todos.data;
};

export const getTodosLoading = state => {
  return state.todos.isLoading;
};

export const getIncompleteTodos = createSelector(getTodos, todos =>
  todos.filter(todo => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(getTodos, todos =>
  todos.filter(todo => todo.isCompleted)
);
