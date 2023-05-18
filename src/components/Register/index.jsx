import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { setRegister } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profileName, setProfileName] = useState('');
  const navigate = useNavigate();
  console.log(username, password);

  const onSubmit = async () => {
    const data = {
      username: username,
      profileName: profileName,
      password: password,
    };
    if (!username || !password || !profileName) {
      alert('Please entar a username/password/profileName');
    } else {
      const response = await setRegister(data);
      alert(response.data.message);
      navigate('/');
      console.log(response);
    }
  };

  return (
    <div className="w-full h-screen container mx-auto bg-slate-white flex flex-col justify-center items-center">
      <div className="flex flex-col max-w-lg w-full bg-gray-200">
        <h1 className="bg-blue-300 text-blue-600 text-center py-3 mb-4">
          Register
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
          <p>Profile Name</p>
          <input
            type="text"
            placeholder="Enter profile name"
            className="max-w-md px-2 py-2 rounded-md"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
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
          Daftar
        </button>
        <Link
          to="/"
          className="mx-auto text-blue-600 mb-4 underline underline-offset-4"
        >
          Sudah Punya Akun
        </Link>
      </div>
    </div>
  );
};

export default Register;
