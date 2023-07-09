import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';
console.log(login);
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: 'Jose', age: 32, email: 'jose@gmail.com' }));
        }}
      >
        Login
      </button>
      <div></div>
    </div>
  );
};

export default Login;
