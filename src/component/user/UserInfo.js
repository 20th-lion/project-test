import React from 'react';

export default function UserInfo({ image, username, accountname }) {
  return (
    <>
      <img src={image} alt=""></img>
      <div>id:{accountname}</div>
      <div>이름:{username}</div>
    </>
  );
}
