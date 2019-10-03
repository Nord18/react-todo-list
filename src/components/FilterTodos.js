import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../App.css';

function FilterTodos(props) {
  return (
    <div className="FilterTodos">
      <div className="left">
        <TextField className="search-field" margin="dense" type="text" variant="outlined" label="Search todo" value={props.search} onChange={props.searchTodo} />
        <Button onClick={props.allTodo} variant="contained">All</Button>
        <Button className="btn-filter" onClick={props.activeTodo} variant="contained" color="primary">Active</Button>
        <Button onClick={props.completedTodo} variant="contained" color="secondary">Completed</Button>
      </div>
      <div className="right">
        <Button onClick={props.doneAllTodo} className="btn-done" variant="outlined">Done all</Button>
        <Button onClick={props.removeAllTodo} className="btn-remove" variant="outlined">Remove all</Button>
      </div>
    </div>
  )
}

export default FilterTodos