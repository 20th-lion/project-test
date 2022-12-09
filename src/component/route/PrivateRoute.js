import React from "react";
import { isLogin } from "../../utils/isLogin";

import LoginPage from "../../pages/Login/LoginPage";

export default function PrivateRoute({ Component, path }) {
  console.log(Component, path);
  return isLogin() ? { Component } : <LoginPage />;
}
