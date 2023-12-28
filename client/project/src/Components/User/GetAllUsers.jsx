import useAxios from 'axios-hooks'
import {useDispatch, useSelector}from 'react-redux'
import {get}  from '../../Slices/UserSlice'
import BasicCard from './UsersMui'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UserUseHttpRequest from '../../Hooks/UserUseHttpRequest';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function GetAllUsers(props) {

  const searchVal=props.searchVal
  const dispatch=useDispatch();

  const [open, setOpen] = React.useState(false);
  const[nameIsAbled,setNameIsAbled]=React.useState(true);
  const[userNameIsAbled,setUserNameIsAbled]=React.useState(true);

  let nameRef = React.useRef("");
  let usernameRef = React.useRef("");
  let emailRef = React.useRef("");
  let addressRef = React.useRef("");
  let phoneRef = React.useRef("");

  const {createNewUser}= UserUseHttpRequest();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    const newName = nameRef.current.value ? nameRef.current.value : ""
    const newUsername = usernameRef.current.value ? usernameRef.current.value : ""
    const newAddress = addressRef.current.value ? addressRef.current.value : ""
    const newEmail = emailRef.current.value ? emailRef.current.value : ""
    const newPhone = phoneRef.current.value.length ? phoneRef.current.value :""
    createNewUser({ name:newName,username:newUsername,email:newEmail,address:newAddress,phone:newPhone}, refetch)
    setOpen(false);
    setNameIsAbled(true)
    setUserNameIsAbled(true)
  };
  const handleClose1= () =>{
    setOpen(false);
    setNameIsAbled(true)
    setUserNameIsAbled(true)
  }

  const page=props.page;
  const users=useSelector(x=>x.UserSlice.UsersData);
    
   const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:1255/api/${page}/getAll`
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  dispatch(get({data:data}))
  
  return(
    <>
    <br/>
    <h1 style={{color:'#b874bc'}}>USERS:</h1>
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}  startIcon={<PersonAddIcon />} sx={{ height: "37px", color:"#000000", backgroundColor:"#22b14c",margin: "5px", opacity: "60%" }}>
        Add User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>add new user</DialogTitle>
        <DialogContent>
          <DialogContentText>please enter details:</DialogContentText>
          <TextField
            onChange={event=>{event.target.value!=""?setNameIsAbled(false):setNameIsAbled(true)}}
            required="true"
            inputRef={nameRef}
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={event=>{event.target.value!=""?setUserNameIsAbled(false):setUserNameIsAbled(true)}}
            required="true"
            inputRef={usernameRef}
            autoFocus
            margin="dense"
            id="username"
            label="username"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
          
            inputRef={addressRef}
            autoFocus
            margin="dense"
            id="address"
            label="address"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
           
            inputRef={phoneRef}
            autoFocus
            margin="dense"
            id="phone"
            label="phone"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
           
            inputRef={emailRef}
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="string"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Cancel</Button>
          <Button disabled={(!nameIsAbled && !userNameIsAbled)?nameIsAbled:true} onClick={handleClose}>add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
 
    {users.map((e)=> 
      e.name.toLowerCase().includes(searchVal.toLowerCase())?
      <BasicCard card ={e} refetch={refetch}/>:<></>
    )}
    
<br/>
<br/>
<br/>


    </>
  )
}
export default GetAllUsers