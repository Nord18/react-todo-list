import React from 'react';
import '../App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function Todolist(props) {

  const todo = (filter) => {
    return filter.map((todo, index) =>
      <List key={todo.id}>
        <ListItem dense button onClick={() => props.doneTodo(todo.id)}>
          <ListItemIcon>
            <Checkbox checked={todo.completed} edge="start"/>
          </ListItemIcon>
          <ListItemText primary={todo.title} />
          <ListItemSecondaryAction onClick={() => props.deleteTodo(index)}>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    )
  };

  const todoAll = todo(props.todos);

  const active = props.todos.filter(todo => {
    return !todo.completed
  });

  const todoActive = todo(active);

  const completed = props.todos.filter(todo => {
    return todo.completed
  });

  const todoCompleted = todo(completed);

  const search = props.todos.filter(todo => {
    return todo.title.match(props.search);
  });

  const todoFind = todo(search);

  if (props.filter === 'all') {
    return (
      <div>
        {todoAll}
      </div>
    )
  } else if (props.filter === 'active') {
    return (
      <div>
        {todoActive}
      </div>
    )
  } else if (props.filter === 'completed') {
    return (
      <div>
        {todoCompleted}
      </div>
    )
  } else if (props.filter === 'search') {
    return (
      <div>
        {todoFind}
      </div>
    )
  }
};

export default Todolist