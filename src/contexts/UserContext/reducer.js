import { USER_SIGNUP } from './types';

export const initialUserData = {
  userId: '',
  nickname: '',
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP: {
      return {
        ...state,
        userId: payload.userId,
        nickname: payload.nickname,
      };
    }
    default: {
      return state;
    }
  }
};
