import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AdminLayout from "./admin/AdminLayout";
import AdminPage from "./admin/AdminPage";
import LoginPage from "./admin/LoginPage"; // Добавляем страницу входа

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={
            <AdminLayout>
              <AdminPage />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
