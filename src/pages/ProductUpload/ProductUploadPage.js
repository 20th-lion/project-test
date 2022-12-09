import React, { useState, useRef } from 'react';
import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import { useNavigate } from 'react-router-dom';
import { registProduct } from '../../lib/apis/productApis';

export default function ProductUploadPage() {
  const navigate = useNavigate();
  const photoInput = useRef();
  const [productInfo, setProductInfo] = useState({
    itemName: '',
    price: 0,
    link: '',
    itemImage: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setProductInfo({
      ...productInfo,
      [name]: value,
    });
  };

  let isCompleted = false;
  if (
    productInfo.itemName !== '' &&
    productInfo.price > 0 &&
    productInfo.link !== '' &&
    productInfo.itemImage !== ''
  ) {
    isCompleted = true;
  }

  const onProductRegist = () => {
    registProduct(productInfo);
    // getProductListApi();
    // navigate('/profile');
  };
  return (
    <>
      <Header
        leftChild={
          <Button onClick={() => navigate(-1)} text={'뒤로가기'} active />
        }
        rightChild={
          <Button
            onClick={onProductRegist}
            text={'저장'}
            active={isCompleted}
          />
        }
      />
      <div>
        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'gray',
          }}
          onClick={() => {
            photoInput.current.click();
          }}
        >
          <input
            ref={photoInput}
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            name="itemImage"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          이름
          <input type="text" name="itemName" onChange={(e) => onChange(e)} />
        </div>
        <div>
          가격
          <input type="number" name="price" onChange={(e) => onChange(e)} />
        </div>
        <div>
          링크
          <input type="text" name="link" onChange={(e) => onChange(e)} />
        </div>
      </div>
    </>
  );
}
