import React from "react";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../utils/isLogin";
import LoginPage from "../Login/LoginPage";
import PostList from "../../component/post/PostList";
import NavBar from "../../component/common/NavBar";
import Header from "../../component/common/Header";
import Button from "../../component/common/Button";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      {isLogin() ? (
        <>
          <Header
            leftChild={<Button text="CAMPER 피드" />}
            rightChild={
              <Button
                onClick={() => {
                  navigate("/search");
                }}
                text={"검색하기"}
                active
              />
            }
          ></Header>
          <div>
            <PostList />
          </div>
          <NavBar />
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
