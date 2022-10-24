import React from "react";
import "./component.css";
import { AiOutlineHome, AiOutlineMore } from "react-icons/ai";
import { FaUmbrellaBeach } from "react-icons/fa";
import {
   GiCaveEntrance,
   GiFishingBoat,
   GiModernCity,
   GiPalmTree,
   GiIsland,
} from "react-icons/gi";
import { TbPool } from "react-icons/tb";
import { FiCoffee } from "react-icons/fi";
import { MdHouseboat } from "react-icons/md";
import { MdSportsGolf } from "react-icons/md";

function Icons(props) {
   return (
      <div className="main-icons">
         {/* <div className="all-icon">
        <TfiArrowCircleLeft className="arrow-right"/>
        </div> */}
         <div className="all-icon">
            <AiOutlineHome className="icon" />
            <p className="icon-name">Shared homes</p>
         </div>
         <div className="all-icon">
            <TbPool className="icon" />
            <p className="icon-name">Amazing pools</p>
         </div>
         <div className="all-icon">
            <FaUmbrellaBeach className="icon" />
            <p className="icon-name">Beach</p>
         </div>
         <div className="all-icon">
            <GiCaveEntrance className="icon" />
            <p className="icon-name">Caves</p>
         </div>
         <div className="all-icon">
            <GiFishingBoat className="icon" />
            <p className="icon-name">Boat</p>
         </div>
         <div className="all-icon">
            <GiModernCity className="icon" />
            <p className="icon-name">Iconic cities</p>
         </div>
         <div className="all-icon">
            <GiPalmTree className="icon" />
            <p className="icon-name">Tropical</p>
         </div>
         <div className="all-icon">
            <FiCoffee className="icon" />
            <p className="icon-name">Bed & breakfast</p>
         </div>
         <div className="all-icon">
            <MdHouseboat className="icon" />
            <p className="icon-name">Houseboats</p>
         </div>
         <div className="all-icon">
            <GiIsland className="icon" />
            <p className="icon-name">Island</p>
         </div>
         <div className="all-icon">
            <MdSportsGolf className="icon" />
            <p className="icon-name">Golfing</p>
         </div>
         {/* <div className="all-icon">
        <TfiArrowCircleRight className="arrow-right"/>
        </div> */}

         <div className="tt">
            <AiOutlineMore />
            <p>Filters</p>
         </div>
      </div>
   );
}

export default Icons;
