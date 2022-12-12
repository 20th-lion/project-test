import client from "./client";

export const getPostList = async () => {
  const reqPath = "/post/332qqq3/userpost";

  const res = await client.get(reqPath);

  return res;
};
