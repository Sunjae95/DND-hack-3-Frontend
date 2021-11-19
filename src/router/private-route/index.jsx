import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { route } from '../index';

export function PrivateRoute({ children }) {
  const [user, setUser] = useState();

  return user != null ? <>{children}</> : <Navigate to={route.main} />;
}
