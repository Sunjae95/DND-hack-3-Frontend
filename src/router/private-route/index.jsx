import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext/UserProvider';
import { getToken } from '../../utils/Token';
import { route } from '../index';

export function PrivateRoute({ children }) {
  const { user } = useUserContext();
  const token = getToken('user');

  return user.id != null ? (
    <>{children}</>
  ) : token ? (
    <>{children}</>
  ) : (
    <Navigate to={route.main} />
  );
}
