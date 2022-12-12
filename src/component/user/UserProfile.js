import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../common/Button";
import UserInfo from "./UserInfo";
import { getMyInfo } from "../../lib/apis/profileApis";

export default React.memo(function UserProfile({ type }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    accountname: "",
    username: "",
    followingCount: 0,
    followerCount: 0,
    image: "",
  });

  const { image, accountname, username, followerCount, followingCount } =
    userInfo;

  useEffect(() => {
    getMyInfo().then((res) => {
      const { accountname, username, followingCount, followerCount, image } =
        res.data.user;
      setUserInfo({
        ...userInfo,
        accountname,
        username,
        followingCount,
        followerCount,
        image,
      });
    });
  }, []);

  return (
    <UserProfileBlock>
      <UserInfo image={image} accountname={accountname} username={username} />
      <div>팔로워:{followerCount}</div>
      <div>팔로잉{followingCount}</div>
      {type === "mine" ? (
        <>
          <Button
            text="프로필 수정"
            onClick={() => navigate("/profile/edit")}
          />
          <Button text="상품등록" onClick={() => navigate("/product")} />
        </>
      ) : (
        <>
          <Button text="언팔로우" onClick={() => {}} />
        </>
      )}
    </UserProfileBlock>
  );
});

const UserProfileBlock = styled.div`
  text-align: center;
  width: 80%;
  padding: 30px;
  border: 1px solid black;
`;
