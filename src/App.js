import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Consult from "./pages/Consult";
import Result from "./pages/Result";
import CopyResult from "./pages/CopyResult";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";

import "reset-css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/which_destination" component={Consult} />
      <Route path="/result" component={Result} />
      <Route path="/copy_result" component={CopyResult} />
    </BrowserRouter>
  );
}

export default App;
