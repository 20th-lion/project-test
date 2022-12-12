import client from "./client";

export const getLoginApiResponse = async (inputs) => {
  const reqPath = "/user/login";
  const loginData = {
    user: inputs,
  };
  const headers = {
    "Content-type": "application/json",
  };
  const res = await client.post(reqPath, loginData, headers);

  return res;
};
