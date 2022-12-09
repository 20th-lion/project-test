import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../component/common/Button";
import NavBar from "../../component/common/NavBar";
import UserProfile from "../../component/user/UserProfile";
import Header from "../../component/common/Header";
import ProductList from "../../component/product/ProductList";
import Modal from "../../component/modal/Modal";

import { logout } from "../../utils/logout";

export default function ProfilePage() {
  const navigate = useNavigate();
  return (
    <>
      <Header
        leftChild={
          <Button onClick={() => navigate(-1)} text={"뒤로가기"} active />
        }
        rightChild={
          <Button
            onClick={() => {
              logout();
              navigate("/");
            }}
            text={"로그아웃"}
            active
          />
        }
      />
      <div>프로필입니다.</div>
      <UserProfile />
      <div>
        상품목록
        <ProductList />
      </div>
      <NavBar />
    </>
  );
}
