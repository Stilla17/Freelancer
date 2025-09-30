import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refreshToken");

    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/user"); // после входа — на главную
    } else {
      navigate("/login"); // после входа — на главную
    }
  }, [navigate]);

  return (
    <div>
      <p>Авторизация через Google...</p>
    </div>
  );
};

export default Callback;
