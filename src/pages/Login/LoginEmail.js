import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoginApiResponse } from "../../lib/apis/loginApis";
import AuthForm from "../../component/form/AuthForm";
import { Link } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onLogin = () =>
    getLoginApiResponse(inputs).then((res) => {
      const { accountname, token } = res.data.user;
      localStorage.setItem("token", token);
      localStorage.setItem("accountname", accountname);
      navigate("/");
    });

  return (
    <div>
      <AuthForm
        type="login"
        inputs={inputs}
        onChange={onChange}
        onSubmit={onLogin}
      />
      <Link to="/join">회원가입</Link>
    </div>
  );
}
