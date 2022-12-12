import client from "./client";

export const registProduct = async (productInfo) => {
  productInfo.price = parseInt(productInfo.price);
  const reqPath = "/product";
  const productData = {
    product: productInfo,
  };
  const res = client.post(reqPath, productData);
  return res;
};

export const getProductList = async () => {
  const reqPath = `/product/332qqq3`;

  const res = await client.get(reqPath);

  return res;
};

export const removeProduct = async (productId) => {
  const reqPath = `/product/${productId}`;
  const res = await client.delete(reqPath);

  return res;
};
