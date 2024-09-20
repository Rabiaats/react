import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useToDoContext } from "../context/ToDoProvider";
import Modal from "./Modal";
import { Checkbox } from "@mui/material";

const ToDoList = ({ markedId, setMarkedId }) => {
  const { todos, deleteToDo, editToDo, info, setInfo } = useToDoContext();
  const [open, setOpen] = useState(false);

  const handleDelete = (id) => {
    deleteToDo(id);
  };

  const handleOpen = (id) => {
    const editTask = todos.filter((task) => task.id === id);
    console.log(editTask[0]);
    setInfo(editTask[0]);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleClick = (id) => {
    const isMark = markedId.find((item) => item === id);
    if (isMark) {
      const update = markedId.filter((item) => item !== id) || [];
      setMarkedId(update);
    } else {
      setMarkedId([...markedId, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("markedId", JSON.stringify(markedId));
  }, [markedId]);

  const getRowClassName = (params) => {
    return params.row.isPriority === "baslangic"
      ? "priority-baslangic"
      : params.row.isPriority
        ? "priority-true"
        : "priority-false";
  };

  const getRowId = (row) => row.id;

  const columns = [
    {
      field: "mark",
      headerName: "",
      width: 20,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { id } }) => (
        <Checkbox
          checked={markedId.find((item) => item === id) ? true : false}
          color="default"
          onClick={() => handleClick(id)}
        />
      ),
    },
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
      minWidth: 450,
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
        backgroundColor:"white"
      }}
    >
      <style>{`
        .priority-true {
          background-color: #be3144;
        }
        .priority-false {
          background-color: yellowgreen;
        }
        .priority-baslangic {
          background-color: white;
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
