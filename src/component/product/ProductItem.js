import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Modal from "../modal/Modal";

export default function ProductItem({
  itemName,
  price,
  itemImage,
  link,
  id,
  load,
}) {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => console.log(itemImage), []);

  return (
    <>
      <StyledItemBlock
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <div>상품명{itemName}</div>
        <div>가격{price}</div>
        <div
          style={{
            width: "100px",
            height: "100px",
          }}
        >
          이미지
          <Simg src={itemImage} alt="" />
        </div>
        <div>링크{link}</div>
      </StyledItemBlock>

      {openModal && (
        <StyledModalBackGround onClick={() => setOpenModal(false)}>
          <Modal type="profilePageProduct" load={load} id={id} />
        </StyledModalBackGround>
      )}
    </>
  );
}

const StyledItemBlock = styled.div`
  border: 1px solid black;
`;

const Simg = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledModalBackGround = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 800;
  background-color: #e3e3d3;
  background-color: rgba(0, 0, 0, 0.5);
`;
