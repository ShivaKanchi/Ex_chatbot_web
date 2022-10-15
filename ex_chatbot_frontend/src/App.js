import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import dashboard from "./pages/dashboard";
import login from "./pages/login";
import register from "./pages/register";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={register} />
        <Route path="/login" component={login} />
        <Route path="/dashboard" component={dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
