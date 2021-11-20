import { createContext, useContext, useReducer } from 'react';
import { handleSignUp } from './actions';
import { initialUserData, reducer } from './reducer';
import { USER_SIGNUP } from './types';

const UserContext = createContext(initialUserData);
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, initialUserData);

  const onSignUp = async (data) => {
    try {
      const { user_id: userId, nickname } = await handleSignUp(data);
      dispatch({ type: USER_SIGNUP, payload: { userId, nickname } });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider value={{ user, onSignUp }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
