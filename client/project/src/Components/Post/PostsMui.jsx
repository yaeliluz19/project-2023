import * as React from 'react';
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import PostUseHttpRequest from '../../Hooks/PostUseHttpRequest';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function BasicCard(props) {

  const {deletePost, updatePost } = PostUseHttpRequest()
  const post = props.card;

  const [open, setOpen] = React.useState(false);
  

  let titleRef = React.useRef("");
  let bodyRef = React.useRef("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

 const save = () => {
    const newTitle = titleRef.current.value ? titleRef.current.value : ""
    const newBody = bodyRef.current.value.length ? bodyRef.current.value :""
    updatePost(post._id,{ title: newTitle, body: newBody }, props.refetch)
    setOpen(false);
    
  };

  const handleClose1 = () => {
    setOpen(false);
    
  }

 
  const posts = useSelector(x => x.PostSlice.PostsData);

  return (
    <Card sx={{ border:"2px solid #b874bc", minWidth: 100, margin: "60px" }}>
      <CardContent>
        <Typography variant="h1" sx={{ fontSize: 20 ,fontFamily:'Segoe Script'}} color="#22b14c" gutterBottom>
          {post.title}
        </Typography>
        <br/><br/>
        <div style={{color: "#b874bc"}}>{post.body}</div>
        <br/><br/>
      </CardContent>

      <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}  startIcon={<ModeIcon/>} sx={{ height: "37px", color:"#22b14c", backgroundColor:"#000000",margin: "5px", opacity: "60%" }}>
        update post
      </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>add new post</DialogTitle>
          <DialogContent>
            <DialogContentText>please enter title and body:</DialogContentText>

            <TextField
              
              required="true"
              defaultValue={post.title}
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
              
              required="true"
              defaultValue={post.body}
              inputRef={bodyRef}
              autoFocus
              margin="dense"
              id="body"
              label="body"
              type="string"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1}>Cancel</Button>
            <Button onClick={save}>Save</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <Button variant="outlined" onClick={() => { deletePost(post._id, props.refetch) }} startIcon={<DeleteIcon />} sx={{ height: "37px", color: "#b874bc", backgroundColor: "#000000", margin: "5px", opacity: "60%" }} >
        Delete
      </Button>
      <br />
      <br />
      <br />

    </Card>

  );
}
