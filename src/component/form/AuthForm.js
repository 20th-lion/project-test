import React from "react";
import Button from "../common/Button";

const textMap = {
  login: "로그인",
  register: "이메일로 회원가입",
};

export default function AuthForm({ type, inputs, onChange, onSubmit }) {
  const text = textMap[type];
  return (
    <div>
      <h2>{text}</h2>
      <div>
        email:
        <input
          name="email"
          value={inputs.email}
          type="text"
          onChange={onChange}
        />
      </div>
      <div>
        password
        <input
          name="password"
          value={inputs.password}
          type="password"
          onChange={onChange}
        />
      </div>
      <Button text={type === "login" ? "로그인" : "다음"} onClick={onSubmit} />
    </div>
  );
}
