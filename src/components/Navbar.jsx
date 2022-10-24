import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";


import './component.css';

const Navbar = () => {
  return (
     <div className="all">
        <div className="logo">
           <img src="/images/logo.png" alt="logo" className="logoreal" />
        </div>

        <div className="circular">
           <div className="b">
              <p>Any where</p>
           </div>
           <div className="b">
              <p>Any week</p>
           </div>
           <div className="re">
              <p>Any guests</p>
              <div className="redserach">
                 <BiSearchAlt2 className="ee" />
              </div>
           </div>
        </div>

        <div className="become">
           <p className="cc">Become a Host</p>
           <TbWorld className="ee" />

           <div className='ff'>
              <GoThreeBars />
              <FaUserCircle className='gg' />
           </div>
        </div>
     </div>
  );
}

export default Navbar