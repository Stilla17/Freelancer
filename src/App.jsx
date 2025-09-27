import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Page/Home";
import Layout from "./Page/Layout.jsx";
import PageSignUp from "./Page/PageSign.jsx";
import PageLogin from "./Page/PageLogin.jsx";
import UserPage from "./Page/UserPage.jsx";
import Callback from "./Page/Callback.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/signup" element={<PageSignUp />} />
          <Route path="/users/callback" element={<Callback />} />
        </Route>
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default App;
