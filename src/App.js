import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Consult from './pages/Consult';
import Result from './pages/Result';
import Test from './pages/test';
import Testpage from './pages/testpage';
import Insta from './pages/insta';
import 'reset-css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Consult} />
      <Route path="/result" component={Result} />
      <Route path="/a" component={Test} />
      <Route path="/insta" component={Insta} />
      <Route path="/Testpage" component={Testpage} />
    </BrowserRouter>
  );
}

export default App;
