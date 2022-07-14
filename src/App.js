import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Crud from "./routes/Crud";
import Login from "./routes/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="crud/*" element={<Crud />} />

      </Routes>
    </Router>
  );
}

export default App;
