import React from "react";
import styled from "styled-components";

export default function ProductItem({
  itemName,
  price,
  itemImage,
  link,
  showModal,
  id,
}) {
  console.log(id);
  return (
    <StyledItemBlock onClick={() => showModal()}>
      <div>상품명{itemName}</div>
      <div>가격{price}</div>
      <div
        style={{
          width: "50px",
          height: "50px",
        }}
      >
        이미지
        <img src={itemImage} alt="" />
      </div>
      <div>링크{link}</div>
    </StyledItemBlock>
  );
}

const StyledItemBlock = styled.div`
  border: 1px solid black;
`;
