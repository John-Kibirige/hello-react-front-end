import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
