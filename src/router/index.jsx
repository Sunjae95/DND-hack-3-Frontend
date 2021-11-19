import { Main } from '@pages/Main';
import { Write } from '@pages/Write';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './private-route';

export const route = {
  main: '/',
  write: '/write',
};

export function Router() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
