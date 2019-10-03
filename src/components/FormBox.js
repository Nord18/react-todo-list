import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';

function FormBox(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextField type="text" variant="filled" className="TextField" fullWidth label="Enter new task" value={props.value} onChange={props.onChange} />
      <Button type="submit" size="large" variant="contained">Add</Button>
    </form>
  )
}

export default FormBox