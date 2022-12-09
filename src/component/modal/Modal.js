import React from "react";
import styled from "styled-components";

export default function Modal({ btns }) {
  return (
    <>
      <StyledModalForm>
        <button onClick={btns[0].method}>{btns[0].text}</button>
        <button onClick={btns[1].method}>{btns[1].text}</button>
        {btns[2] && <button onClick={btns[2].method}>{btns[2].text}</button>}
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
