import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Home/>} />
        <Route path="/basket" element={<Basket/>} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default AppRouter;
