import { Main } from '@pages/Main/index.jsx';
import { Write } from '@pages/Write';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProvider from '../contexts/UserContext/UserProvider';
import { PrivateRoute } from './private-route';

export const route = {
  main: '/',
  write: '/write',
};

export function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path={route.main} element={<Main />} />
          <Route
            path={route.write}
            element={
              <PrivateRoute>
                <Write />
              </PrivateRoute>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
