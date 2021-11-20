import { setToken } from '@utils/Token';
import { USER_ID, NICKNAME } from '@constants/keyValue';

export const handleSignUp = (value) => {
  try {
    const {
      data: { user_id, nickname },
      status,
    } = value;

    if (status === 200) {
      setToken(USER_ID, user_id);
      setToken(NICKNAME, nickname);
    }

    return { user_id, nickname };
  } catch (e) {
    throw new Error('로그인실패');
  }
};
