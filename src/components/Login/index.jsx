import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { setLogin } from '../../services/auth';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log(username, password);

  const onSubmit = async () => {
    const data = {
      username: username,
      password: password,
    };
    if (!username || !password) {
      alert('Please entar a username and password');
    } else {
      const response = await setLogin(data);
      console.log(response);
      if (response.error) {
        alert(response.error);
      } else if (response.data.message === 'LOGIN FAILED') {
        alert(response.data.message);
      } else {
        alert('Login Berhasil');
        const token = response.data.data.token;
        console.log(token);
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64, { expires: 1 });
        navigate('/barang');
      }
    }
  };

  return (
    <div className="w-full h-screen container mx-auto bg-slate-white flex flex-col justify-center items-center">
      <div className="flex flex-col max-w-lg w-full bg-gray-200">
        <h1 className="bg-blue-300 text-blue-600 text-center py-3 mb-4">
          Login
        </h1>
        <div className="flex flex-col px-4 gap-2">
          <p>Username</p>
          <input
            type="text"
            placeholder="Enter username"
            className="max-w-md px-2 py-2 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col px-4 gap-2">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter password"
            className="max-w-md px-2 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-700 w-28 mx-auto rounded-lg p-3 text-white mt-2 mb-4"
          onClick={onSubmit}
        >
          Masuk
        </button>
        <Link
          to="/register"
          className="mx-auto text-blue-600 mb-4 underline underline-offset-4"
        >
          Belum Punya Akun
        </Link>
      </div>
    </div>
  );
};

export default Login;
