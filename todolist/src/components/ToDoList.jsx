import React, { useState } from "react";
// import EditModal from './EditModal'
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useToDoContext } from "../context/ToDoProvider";
import Modal from "./Modal";

const ToDoList = () => {
  const { todos, deleteToDo, editToDo, info, setInfo } = useToDoContext();

  const getRowClassName = (params) => {
    return params.row.isPriority ? "priority-true" : "priority-false";
  };

  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
      const editTask = todos.filter((task) => task.id === id)
      console.log(editTask[0])
      setInfo(editTask[0])
      setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    deleteToDo(id);
  };

  const getRowId = (row) => row.id;
  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      width: 100,
      headerAlign: "left",
      align: "left",
      renderCell: ({ row }) => new Date(row.date).toLocaleDateString("de-DE"),
    },
    {
      field: "title",
      headerName: "Title",
      minWidth: 490,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      headerAlign: "center",
      align: "left",
      renderCell: ({ row: { id } }) => {
        return [
          <GridActionsCellItem
            sx={{ marginRight: "1rem" }}
            key="edit"
            icon={<EditIcon />}
            label="Edit"
            onClick={() => handleOpen(id)}
          />,
          <GridActionsCellItem
            key="delete"
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDelete(id)}
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 400,
        width: "90%",
        maxWidth: "700px",
        margin: "auto",
        boxShadow: "0 0 15px 1px black",
        borderRadius: "1rem",
      }}
    >
      <style>{`
        .priority-true {
          background-color: red;
        }
        .priority-false {
          background-color: lightgreen;
        }
      `}</style>
      <DataGrid
        sx={{ border: "none" }}
        rows={todos}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={getRowId}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        getRowClassName={getRowClassName}
      />
      <Modal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
        toDoFunc={editToDo}
      />
    </Box>
  );
};

export default ToDoList;
