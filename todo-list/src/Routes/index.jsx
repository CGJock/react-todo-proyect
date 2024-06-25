import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Inicio from "../pages/Inicio/Inicio";
import Profile from "../pages/Profile/Profile";


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route
          path="/Profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
        {/* <Route path="*" element={<Home/>} /> */}
      </Routes>
    </>
  );
};

export default Routing;