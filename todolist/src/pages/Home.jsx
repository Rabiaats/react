import React, { useState } from "react";
import ToDoList from "../components/ToDoList";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useToDoContext } from "../context/ToDoProvider";

const Home = () => {
  const { deleteToDo } = useToDoContext();

  const [markedId, setMarkedId] = useState(
    JSON.parse(localStorage.getItem("markedId")) || []
  );

  const handleClick = () => {
    markedId.map((item) => (deleteToDo(item)));
    localStorage.setItem("markedId", JSON.stringify([]));
    setMarkedId([]);
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ToDoList markedId={markedId} setMarkedId={setMarkedId} />
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ backgroundColor: "black" }}
        endIcon={<DeleteIcon fontSize="large" />}
      >
        Selected
      </Button>
    </Box>
  );
};

export default Home;
