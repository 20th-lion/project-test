import client from "./client";
import axios from "axios";

export const imageUpload = async (file) => {
  const reqPath = "/image/uploadfile";
  const header = {
    "Content-type": "multipart/form-data",
  };

  const formData = new FormData();
  formData.append("image", file);
  const res = await axios.post(
    "https://mandarin.api.weniv.co.kr" + reqPath,
    formData
  );
  return res;
};

/* 
export const imageUpload = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  const res = await fetch("https://mandarin.api.weniv.co.kr/image/uploadfile", {
    method: "POST",
    body: formData,
  });
  return res;
};
 */
