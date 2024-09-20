import React from 'react'
import ToDoList from '../components/ToDoList';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{minHeight:"70vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        
    <ToDoList/>
    </Box>
  )
}

export default Home;