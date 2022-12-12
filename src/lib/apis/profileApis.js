import client from "./client";
import axios from "axios";
import { axiosP, axiosPublic } from "./axios";

const url = "https://mandarin.api.weniv.co.kr";
const token = localStorage.getItem("token");

export const getMyInfo = async () => {
  const reqPath = `/user/myinfo`;

  const res = await axios.get(url + reqPath, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const getUserInfo = async (accountname) => {
  const reqPath = `/profile/${accountname}`;

  const res = await axiosP.get(reqPath);
  return res;
};
