import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isAdmin")) {
      navigate("/login"); // Если не авторизован, уходим на /login
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Удаляем флаг входа
    navigate("/"); // Перенаправляем обратно на страницу входа
  };

  return (
    <div>
      <h2>Добро пожаловать в админку!</h2>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default AdminPage;
