import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav>
        <StyledUl>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/chat/list">채팅</Link>
          </li>
          <li>
            <Link to="/post/upload">게시글</Link>
          </li>
          <li>
            <Link to="/profile">프로필</Link>
          </li>
        </StyledUl>
      </nav>
    </>
  );
}

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
