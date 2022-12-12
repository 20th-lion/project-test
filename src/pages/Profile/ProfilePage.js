import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useMoals from "../../lib/hooks/useMoals";

import Button from "../../component/common/Button";
import NavBar from "../../component/common/NavBar";
import UserProfile from "../../component/user/UserProfile";
import Header from "../../component/common/Header";
import ProductList from "../../component/product/ProductList";
import PostList from "../../component/post/PostList";
import Modal from "../../component/modal/Modal";

import ModalsProvider from "../../component/modal/ModalsProvider";

export default function ProfilePage() {
  // const { openModal } = useMoals();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  // const handleClick = () => {
  //   openModal(Modal, { foo: "bar" });
  // };

  return (
    <ModalsProvider>
      <Header
        leftChild={
          <Button onClick={() => navigate(-1)} text={"뒤로가기"} active />
        }
        rightChild={
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
            text={"모달"}
            active
          />
        }
      />
      <div>프로필</div>
      <UserProfile type="mine" />
      <div>
        상품목록
        <ProductList />
      </div>
      <div>
        <PostList />
      </div>
      <NavBar />
      {openModal && (
        <StyledModalBackGround onClick={() => false}>
          <Modal type="Header" />
        </StyledModalBackGround>
      )}
    </ModalsProvider>
  );
}

const StyledModalBackGround = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 800;
  background-color: #e3e3d3;
  background-color: rgba(0, 0, 0, 0.5);
`;
