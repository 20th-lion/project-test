import client from './client';

export const registProduct = async (productInfo) => {
  productInfo.price = parseInt(productInfo.price);
  const reqPath = '/product';
  const productData = {
    product: productInfo,
  };
  const res = client.post(reqPath, productData);
  console.log(res);
  return res;
};

export const getProductList = async () => {
  const reqPath = `/product/332qqq3`;

  const res = await client.get(reqPath);

  console.log(res);
  return res;
};
