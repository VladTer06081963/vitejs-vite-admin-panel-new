import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <header>Панель администратора</header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
