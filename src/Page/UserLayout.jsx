import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../Components/UserHeader/UserHeader.jsx";

function Layout() {
  return (
    <div>
      <UserHeader />
      <Outlet />
    </div>
  );
}

export default Layout;
