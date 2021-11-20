import axios from 'axios';
import { setToken } from '@utils/Token';

export const handleSignUp = async (value) => {
  try {
    const { data, status } = await axios({
      method: 'POST',
      url: 'https://hack-dnd.herokuapp.com/accounts/signup/',
      data: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (status === 200) {
      // setToken(USER_ID, user_id);
      // setToken(NICKNAME, nickname);
      setToken('user', data);
    }

    // return { user_id, nickname };
    return data;
  } catch (e) {
    throw new Error('로그인실패');
  }
};
