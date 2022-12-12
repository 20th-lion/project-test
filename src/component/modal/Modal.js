import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeProduct } from "../../lib/apis/productApis";
import { ModalsStateContext } from "./ModalsContext";
import { logout } from "../../utils/logout";

export default function Modal({ type, load, id }) {
  // const openModals.map((modal, index))
  const navigate = useNavigate();
  const modalTypes = {
    Header: [
      {
        text: "설정 및 개인정보",
        method: () => {
          navigate("/profile");
        },
      },
      {
        text: "로그아웃",
        method: () => {
          logout();
          navigate("/");
        },
      },
    ],
    profilePageProduct: [
      {
        text: "삭제",
        method: async () => {
          console.log("삭제???");
          await removeProduct(id);
          load();
        },
      },
      {
        text: "수정",
        method: () => {},
      },
      {
        text: "웹사이트에서 상품보기",
        method: () => {
          console.log("웹웹웹");
        },
      },
    ],
  };

  const modalContent = modalTypes[type];
  return (
    <>
      <StyledModalForm>
        <button onClick={modalContent[0].method}>{modalContent[0].text}</button>
        <button onClick={modalContent[1].method}>{modalContent[1].text}</button>
        {modalContent[2] && (
          <button onClick={modalContent[2].method}>
            {modalContent[2].text}
          </button>
        )}
      </StyledModalForm>
    </>
  );
}

const StyledModalForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  z-index: 999;

  position: fixed;
  bottom: 0;

  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;
