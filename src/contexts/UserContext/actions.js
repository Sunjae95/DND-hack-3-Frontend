import { setToken } from '@utils/Token';

export const handleLogin = async (value) => {
  try {
    const {
      data: { user, token },
      status,
    } = await 'login';

    if (status === 200) {
      setToken(token);
    }
    return user;
  } catch (e) {
    throw new Error('로그인실패');
  }
};
