import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from './thunks';
import { getTodos, getTodosLoading } from './selectors';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading Todos...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  todos: getTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
