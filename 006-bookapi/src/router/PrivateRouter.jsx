import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();

  return currentUser ? <Outlet /> : <Navigate replace to="/" />;
};

export default PrivateRouter;
