import useAxios from 'axios-hooks'
import {useDispatch, useSelector}from 'react-redux'
import {get}  from '../../Slices/TodoSlice'
import BasicCard from './TodosMui'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TodoUseHttpRequest from '../../Hooks/TodoUseHttpRequest';


function GetAllTodos(props) {
  const searchVal=props.searchVal
  const dispatch=useDispatch();

  const [open, setOpen] = React.useState(false);
  const[titleIsAbled,setTitleIsAbled]=React.useState(true);
  const[tagsIsAbled,setTagsIsAbled]=React.useState(true);

  let titleRef = React.useRef("");
  let tagsRef = React.useRef([]);

  const {createTodo}= TodoUseHttpRequest();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
    const newTitle = titleRef.current.value ? titleRef.current.value : ""
    const newTags = tagsRef.current.value.length ? tagsRef.current.value.split(",") : []
    createTodo( { title: newTitle, tags: newTags }, refetch)
    setTitleIsAbled(true)
    setTagsIsAbled(true)
  };
  const handleClose1= () =>{
    setOpen(false);
    setTitleIsAbled(true)
    setTagsIsAbled(true)
  }

  const page=props.page;
  const todos=useSelector(x=>x.TodoSlice.TodosData);
    
   const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:1255/api/${page}/getAll`
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  dispatch(get({data:data}))
  
  return(
    <>
    <br/>
    <h1 style={{color:'#b874bc'}}>TO DO LIST:</h1>
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}  startIcon={<AddIcon />} sx={{ height: "37px", color:"#000000", backgroundColor:"#22b14c",margin: "5px", opacity: "60%" }}>
        Add task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>add new task</DialogTitle>
        <DialogContent>
          <DialogContentText>please enter title and tags:</DialogContentText>
          <TextField
            onChange={event=>{event.target.value!=""?setTitleIsAbled(false):setTitleIsAbled(true)}}
            required="true"
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
            onChange={event=>{event.target.value!=""?setTagsIsAbled(false):setTagsIsAbled(true)}}
            defaultValue={todos.tags}
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
          <Button disabled={ (!titleIsAbled && !tagsIsAbled)?titleIsAbled:true} onClick={handleClose}>add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    {todos.map((e)=> 
      e.title.toLowerCase().includes(searchVal.toLowerCase())?
      <BasicCard card ={e} refetch={refetch}/>:
      <></>
)}
<br/>
<br/>
<br/>
    </>
  )
}
export default GetAllTodos
