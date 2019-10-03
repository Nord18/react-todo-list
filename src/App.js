import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import FormBox from './components/FormBox'
import TodoList from './components/TodoList'
import FilterTodos from './components/FilterTodos'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      search: '',
      filter: 'all',
      todos: [
        {
          title: 'Learn React',
          id: Math.random(),
          completed: true
        }
      ]
    }
  };

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value
    })
  };

  searchTodo = (evt) => {
    this.setState({
      search: evt.target.value,
      filter: 'search'
    })
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    if (this.state.value !== '') {
      const todos = [...this.state.todos, {
        title: this.state.value,
        id: Math.random(),
        completed: false
      }];
  
      this.setState(state => ({
        todos,
        value: ''
      }))
    } else {
      alert('Type task name')
    }
  };

  handleToggle = (id) => {
    const todos = [...this.state.todos];

    todos.map(todo => {
      if (todo.id === id) {
        return todo.completed = !todo.completed
      } else {
        return todo
      }
    });

    this.setState(state => ({
      todos
    }))
  };

  deleteTodo = (index) => {
    const todos = [...this.state.todos];

    todos.splice(index, 1);

    this.setState(state => ({
      todos
    }))
  };

  activeTodo = () => {
    this.setState({
      filter: 'active'
    })
  };

  completedTodo = () => {
    this.setState({
      filter: 'completed'
    })
  };

  allTodo = () => {
    this.setState({
      filter: 'all'
    })
  };

  doneAllTodo = () => {
    const doneAllTodo = [...this.state.todos];

    doneAllTodo.map(todo => {
      return todo.completed = true
    });

    this.setState(state => ({
      todos: doneAllTodo
    }))
  };

  removeAllTodo = () => {
    const todos = [...this.state.todos];

    todos.splice(0, todos.length);

    this.setState(state => ({
      todos
    }))
  };

  render() {
    return (
      <div className="App">
        <Grid className="Header" justify="center" container>
          <Grid item xs={11}>
            <h1 className="Title">My to-do react app</h1>
            <FormBox value={this.state.value} onSubmit={this.handleSubmit} onChange={this.handleChange} />
          </Grid>
        </Grid>
        <TodoList search={this.state.search} filter={this.state.filter} todos={this.state.todos} doneTodo={this.handleToggle} deleteTodo={this.deleteTodo} />
        <FilterTodos todos={this.state.todos} removeAllTodo={this.removeAllTodo} doneAllTodo={this.doneAllTodo} searchTodo={this.searchTodo} value={this.state.search} allTodo={this.allTodo} completedTodo={this.completedTodo} activeTodo={this.activeTodo} />
      </div>
    );
  }
}

export default App;