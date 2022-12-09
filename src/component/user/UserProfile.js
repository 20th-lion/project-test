import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/Button';
import UserInfo from './UserInfo';
import { getMyInfo } from '../../lib/apis/profileApis';

export default function UserProfile() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    accountname: '',
    username: '',
    followingCount: 0,
    followerCount: 0,
    image: '',
  });
  const accountname1 = localStorage.getItem('accountname');
  const { image, accountname, username, followerCount, followingCount } =
    userInfo;

  useEffect(() => {
    getMyInfo(accountname1).then((res) => {
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
      <Button text="상품등록" onClick={() => navigate('/product')} />
    </UserProfileBlock>
  );
}

const UserProfileBlock = styled.div`
  text-align: center;
  width: 80%;
  padding: 30px;
  border: 1px solid black;
`;
