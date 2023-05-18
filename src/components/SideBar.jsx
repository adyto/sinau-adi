import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import avatar from '../assets/avatar.png';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      setUsername(payload.sub);
    }
  }, []);
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col  bg-slate-400 items-center">
        <img src={avatar} className="w-20 h-20 my-10" />
        <p className="bg-blue-100 w-full text-center py-5">{username}</p>
      </div>
      <div className="flex flex-col   items-center">
        <p className="bg-blue-100 w-full text-center py-5">Menu</p>
        {['barang', 'supplier'].map((item) => (
          <NavLink
            to={`/${item}`}
            key={item}
            className={({ isActive }) =>
              isActive
                ? 'bg-blue-600 text-white w-full text-center'
                : 'bg-white text-black w-full text-center'
            }
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
