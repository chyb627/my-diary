import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Error from './pages/Error';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
