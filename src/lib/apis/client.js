import axios from "axios";

const token = localStorage.getItem("token");

const client = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  },
});

export default client;
