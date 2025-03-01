import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Мой сайт</h1>
        <nav>
          <Link to="/">Главная</Link> |  
          <Link to="/about">О нас</Link> |  
          <Link to="/admin">Админка</Link>  {/* Добавляем ссылку на админку */}
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2025 Все права защищены</footer>
    </div>
  );
};

export default Layout;
