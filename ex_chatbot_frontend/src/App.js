import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import dashboard from "./pages/dashboard.js";
import login from "./pages/login.js";
import register from "./pages/register.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" component={register} />
        <Route path="/login" component={login} />
        <Route path="/dashboard" component={dashboard} />
      </Routes  >
    </BrowserRouter>
  );
}

export default App;
