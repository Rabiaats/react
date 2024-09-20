import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Modal from './Modal';
import { useToDoContext } from '../context/ToDoProvider';

export default function Navbar() {

  const {setInfo, createToDo} = useToDoContext();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:"lightgray"}}>
        <Toolbar sx={{ display:"flex", flexWrap:"wrap" , justifyContent:"center"}}>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 , textAlign:"center", padding:"1rem", color:"black", fontWeight:"bold"}}>
            To Do List
          </Typography>
          <Button onClick={handleOpen} sx={{color:"black", width:"100px", fontSize:"1rem", fontWeight:"bold", marginRight:"2rem"}}>Add <PlaylistAddIcon fontSize='large' sx={{marginLeft:"5px"}}/></Button>
          <Modal open={open} handleClose={handleClose} info={""} setInfo={setInfo} toDoFunc={createToDo}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
