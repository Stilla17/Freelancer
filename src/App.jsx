import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Page/Home";
import Layout from "./Page/Layout.jsx";
import PageSignUp from "./Page/PageSignUp.jsx";
import PageLogin from "./Page/PageLogin.jsx";
import UserPage from "./Page/UserPage.jsx";
import Callback from "./Page/Callback.jsx";
import HomepageView from './Components/HomepageView/HomepageView.jsx';
const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/login" element={<PageLogin showPassword={showPassword} setShowPassword={setShowPassword}/>} />
          <Route path="/signup" element={<PageSignUp showPassword={showPassword} setShowPassword={setShowPassword}/>} />
          <Route path="/users/callback" element={<Callback />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/profile" element={<HomepageView />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
