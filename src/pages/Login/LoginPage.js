import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <div>로그인xxx</div>
      <h2>로고</h2>
      <Link to={'/login/email'}>이메일로 로그인</Link>
      <Link to={'/join'}>/회원가입</Link>
    </>
  );
}
