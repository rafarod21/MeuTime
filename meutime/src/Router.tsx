import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ErrorPage } from './pages/ErrorPage';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
