import * as React from 'react';
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import TodoUseHttpRequest from '../../Hooks/TodoUseHttpRequest';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BasicCard(props) {

  const { updateTodoComplete, deleteTodo, updateTodo } = TodoUseHttpRequest()
  const todo = props.card;

  const [statusCheckbox, setStatusCheckbox] = React.useState(todo.completed);
  const[isAbled,setisAbled]=React.useState(true);
  
  const changeCheck = () => {
    setStatusCheckbox(!statusCheckbox)
    updateTodoComplete(todo._id)
  }

  const [open, setOpen] = React.useState(false);

  let titleRef = React.useRef("");
  let tagsRef = React.useRef([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

 const save = () => {
    const newTitle = titleRef.current.value ? titleRef.current.value : ""
    const newTags = tagsRef.current.value.length ? tagsRef.current.value.split(",") : []
    updateTodo(todo._id,{ title: newTitle, tags: newTags }, props.refetch)
    setOpen(false);
  };

  const handleClose1 = () => {
    setOpen(false);
  }

 
  const todos = useSelector(x => x.TodoSlice.TodosData);

  return (
    <Card sx={{ border:"2px solid #b874bc", minWidth: 100, margin: "60px" }}>
      <CardContent>
        <Typography variant="h1" sx={{ fontSize: 20,fontFamily:'Segoe Script' }} color="#22b14c" gutterBottom>
          {todo.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color: "#22b14c" }}></Button>
      </CardActions>

      <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}  startIcon={<ModeIcon/>} sx={{ height: "37px", color:"#22b14c", backgroundColor:"#000000",margin: "5px", opacity: "60%" }}>
        update task
      </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>add new task</DialogTitle>
          <DialogContent>
            <DialogContentText>please enter title and tags:</DialogContentText>
            <TextField
              onChange={event=>{event.target.value!=""?setisAbled(false):setisAbled(true)}}
              required="true"
              defaultValue={todo.title}
              inputRef={titleRef}
              autoFocus
              margin="dense"
              id="title"
              label="title"
              type="string"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={event=>{event.target.value!=""?setisAbled(false):setisAbled(true)}}
              defaultValue={todo.tags}
              inputRef={tagsRef}
              autoFocus
              margin="dense"
              id="tags"
              label="tag"
              type="string"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1}>Cancel</Button>
            <Button disabled={isAbled} onClick={save}>save</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <Button variant="outlined" onClick={() => { deleteTodo(todo._id, props.refetch) }} startIcon={<DeleteIcon />} sx={{ height: "37px", color: "#b874bc", backgroundColor: "#000000", margin: "5px", opacity: "60%" }} >
        Delete
      </Button>
      <Checkbox {...label} checked={statusCheckbox} onChange={() => changeCheck()} defaultChecked />
      <br />
      <br />
      <br />

    </Card>

  );
}
