import React from "react";
import dashboard from "./pages/dashboard";
import login from "./pages/login";
import register from "./pages/register";
function App() {
  return (<BrowserRouter>
    <switch>
      <Route path="/register" component={register} />
      <Route path="/login" component={login} />
      <Route path="/dashboard" component={dashboard} />
    </switch>
  </BrowserRouter>);
}

export default App;
