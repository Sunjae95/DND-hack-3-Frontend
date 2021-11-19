import { USER_LOGIN } from './types';

export const initialUserData = {
  user: {},
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      return {
        ...state,
        user: payload.user,
      };
    }
    default: {
      return state;
    }
  }
};
