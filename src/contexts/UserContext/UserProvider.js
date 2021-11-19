import { createContext, useContext, useReducer } from 'react';
import { handleLogin } from './actions';
import { initialUserData, reducer } from './reducer';
import { USER_LOGIN } from './types';

const UserContext = createContext(initialUserData);
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, initialUserData);

  const onLogin = async (data) => {
    try {
      const currentUser = await handleLogin(data);
      dispatch({ type: USER_LOGIN, payload: currentUser });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider value={{ user, onLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
