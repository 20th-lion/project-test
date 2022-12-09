import { isValidToken } from './isValidToken';

export const isLogin = () => {
  const token = localStorage.getItem('token');
  if (token) {
    console.log(isValidToken());
    return isValidToken();
  }
  return false;
};
