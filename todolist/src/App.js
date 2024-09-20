import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // toastify icin
import ToDoProvider from "./context/ToDoProvider";

function App() {
  // AppRouter ı contextler ile cevreleyecegiz , Toastify dista kalir
  // toastify genelde contextlerde , api den veriler cekilirken ya da kayıt olma islemlerinde

  return (
    <>
      <ToDoProvider>
        <AppRouter />
      </ToDoProvider>
      <ToastContainer />
    </>
  );
}

export default App;