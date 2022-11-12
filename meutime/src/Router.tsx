import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';

export function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}
