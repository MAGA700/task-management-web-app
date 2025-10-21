import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("user"));

  const handleLogin = () => setAuth(true);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={auth ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
