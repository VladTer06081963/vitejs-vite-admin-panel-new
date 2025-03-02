import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Неверный пароль!");
    }
  };

  return (
    <div> 
      <h2>Вход в админку</h2>
      <input
        type="password"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default LoginPage;
