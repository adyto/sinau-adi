import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import SideBar from '../SideBar';
import Footer from '../Footer';

const Supplier = () => {
  const cookiesData = Cookies.get('token');
  const nagivate = useNavigate();

  useEffect(() => {
    if (!cookiesData) {
      nagivate('/login');
    }
  }, []);
  console.log(cookiesData);
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <div className="w-full flex flex-row mt-20 gap-x-4 container mx-auto">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="w-2/3">Supplier</div>
      </div>
      <Footer />
    </div>
  );
};

export default Supplier;
