import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toastSuccessNotify, toastErrorNotify } from "../helpers/ToastNotify";
import data from "../helpers/data";

const ToDoContext = createContext();

export const useToDoContext = () => {
    return useContext(ToDoContext);
}

const ToDoProvider = ({children}) => {

    const api = "https://66e9bfde87e41760944a9ee8.mockapi.io/todos";
    //^ get /todos
    //^ get 1 tane /todos/:id
    //^ post /todos, todo
    //^ put /todos/:id
    //^ delete /todos/:id
    const [todos, setToDos] = useState([]);
    const [info, setInfo] = useState("");

    const getToDo = async() => {

        try {    
            const res = await axios(api)
            if(res.data.length){
                setToDos(res.data);
            }else{
                setToDos(data)
            }
        } catch (error) {
            toastErrorNotify(error.message)
        }
    }

    const createToDo = async(todo) => {
        try {
            await axios.post(api, todo)
            toastSuccessNotify(`Add is succcesfully`);
            getToDo();
        } catch (error) {
            toastErrorNotify("Add is unsuccessful")
        }
    }

    const editToDo = async(id, editToDo) => {
        try {
            await axios.put(`${api}/${id}`, editToDo)
            toastSuccessNotify(`Edit is successfully`);
            getToDo();
        } catch (error) {
            toastErrorNotify("Edit is unsuccessful");
        }
    }

    const deleteToDo = async(id) => {
        try {
            await axios.delete(`${api}/${id}`);
            toastSuccessNotify("Delete is succesfully");
            getToDo();
        } catch (error) {
            toastErrorNotify("Delete is unsuccessful");
        }
    }

    useEffect(() => {
        getToDo();
    }, [])

    const values = {todos, setToDos, createToDo, deleteToDo, editToDo, info, setInfo}

  return (
    <ToDoContext.Provider value={values}>
    {children}
    </ToDoContext.Provider>
  )
}

export default ToDoProvider;


// const [books, setBooks] = useState([]);
//   const url = "https://clarus-library-api.vercel.app/books";

//   //^ GET-READ
//   const getBooks = async() => {
//     const res = await axios.get(url);
//     setBooks(res.data);
//   }

//   //^ DELETE
//   const deleteBook = async(id) => {
//     await axios.delete(`${url}/${id}`);
//     getBooks();
//   }

//   //^ POST-ADD-SAVE
//   const postBook = async(newData) => {
//     await axios.post(url, newData);
//     getBooks();
//   }

//   //^ PUT-EDIT-UPDATE
//   const putBook = async(editItem) => {
//     await axios.put(`${url}/${editItem.id}`, editItem);
//     getBooks();
//   }

//   useEffect(() => {
//     getBooks();
//   }, [])
