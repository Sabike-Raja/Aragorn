import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../screens/login/login";
import Registration from "../screens/registration/registration";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
    </Routes>
  );
};

export default AppRouter;
