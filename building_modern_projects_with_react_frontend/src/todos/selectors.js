export const getTodos = state => {
  return state.todos.data;
};

export const getTodosLoading = state => {
  return state.todos.isLoading;
};
