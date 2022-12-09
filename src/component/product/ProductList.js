import React, { useState, useEffect } from "react";
import { getProductList } from "../../lib/apis/productApis";
import ProductItem from "../../component/product/ProductItem";
import Modal from "../modal/Modal";
import styled from "styled-components";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const loadproductList = () => {
    getProductList().then((res) => {
      setProductList([...res.data.product]);
    });
  };
  useEffect(() => {
    loadproductList();
  }, []);

  const showModal = () => {
    setOpenModal(true);
  };

  const modalBtns = [
    {
      text: "삭제",
      method: () => {
        console.log("삭제삭제");
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
  ];

  return (
    <>
      {productList &&
        productList.map((item, idx) => (
          <ProductItem key={idx} showModal={showModal} {...item} />
        ))}
      {openModal && (
        <StyledModalBackGround
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <Modal btns={modalBtns} />
        </StyledModalBackGround>
      )}
    </>
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
