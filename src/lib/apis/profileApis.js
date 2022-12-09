import axios from 'axios';

export const getMyInfo = async () => {
  const url = 'https://mandarin.api.weniv.co.kr';
  const reqPath = `/user/myinfo`;
  const token = localStorage.getItem('token');

  const res = await axios.get(url + reqPath, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
