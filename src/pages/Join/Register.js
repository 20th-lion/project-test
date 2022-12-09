import React, { useState } from 'react';
import axios from 'axios';
function Register() {
  const url = 'https://mandarin.api.weniv.co.kr';
  const [inputValue, setInputValue] = useState({
    user: {
      email: '',
      password: '',
      accountname: '',
      username: '',
    },
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      user: { ...inputValue.user, [name]: value },
    });
  };

  const doSignUp = async () => {
    try {
      fetch(url + '/user', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(inputValue),
      })
        .then((res) => res.json())
        .then((data) => console.log(data.message));

      const { data } = await axios.post(url + '/user', inputValue);
      console.log(data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>회원가입하기</h2>
      <div>
        email:
        <input name="email" onChange={inputChangeHandler} />
      </div>
      <div>
        password:
        <input name="password" type="password" onChange={inputChangeHandler} />
      </div>
      <div>
        계정ID:
        <input name="accountname" type="text" onChange={inputChangeHandler} />
      </div>
      <div>
        사용자이름:
        <input name="username" type="text" onChange={inputChangeHandler} />
      </div>
      <button onClick={doSignUp}>회원가입</button>
    </div>
  );
}

export default Register;
