import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import SideBar from '../SideBar';
import Footer from '../Footer';
import CardBarang from './CardBarang';

const Barang = () => {
  const cookiesData = Cookies.get('token');
  const nagivate = useNavigate();

  useEffect(() => {
    if (!cookiesData) {
      nagivate('/login');
    }
  }, []);
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <div className="w-full flex flex-row mt-20 gap-x-4 container mx-auto">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="w-2/3">
          <CardBarang />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          placeat corrupti ad aliquid repellat dolore eaque velit in illo
          repellendus asperiores cumque veritatis dolorum porro aut, fugiat eum
          et. Velit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab, velit ratione mollitia amet veniam dolorem dolorum iure illum
          quasi aspernatur possimus adipisci quis tempore qui necessitatibus
          labore minus enim ipsam? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium saepe ipsa consequuntur, amet dolor
          culpa ad fugiat ab odit laborum obcaecati aspernatur in quis est vitae
          cupiditate vel facere perspiciatis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maiores quae, maxime amet officia neque
          fugit facilis incidunt accusantium velit molestiae corrupti debitis
          eligendi distinctio. Cumque officia sint pariatur numquam ipsam?
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Barang;
