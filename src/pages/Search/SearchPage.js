import React from "react";
import Header from "../../component/common/Header";
import Button from "../../component/common/Button";
import { useNavigate } from "react-router-dom";
export default function SearchPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header
        leftChild={<Button text="<-" onClick={() => navigate(-1)} />}
        rightChild={<input placeholder="계정검색"></input>}
      />
    </>
  );
}
