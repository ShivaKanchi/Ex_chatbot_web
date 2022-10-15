import React from "react";
import { Routes, Route } from "react-router-dom";
import dashboard from "./pages/Dashboardpage";
import login from "../src/pages/Loginpage";
import register from "../src/pages/Registerpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Helo</h1>} />
      <Route path="/register" element={register} />
      <Route path="/login" element={login} />
      <Route path="/dashboard" element={dashboard} />
    </Routes  >

  );
}

export default App;
