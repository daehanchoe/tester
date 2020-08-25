import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Consult from './pages/Consult';
import Result from './pages/Result';

import 'reset-css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Consult} />
      <Route path="/result" component={Result} />
    </BrowserRouter>
  );
}

export default App;
