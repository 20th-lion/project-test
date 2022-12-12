import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { getPostList } from "../../lib/apis/postApis";

export default function PostList() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    getPostList().then((res) => console.log(res));
  });

  return <div></div>;
}
