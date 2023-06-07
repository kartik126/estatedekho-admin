import React, { useState } from "react";
import logo from "../assets/edlogo-removebg-preview.png";
import { HomeIcon } from "@heroicons/react/outline";
import { MapIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
function Sidebar() {
  const [active, setactive] = useState("hidden");

  return (
    <div>
      <MenuIcon
        className={`m-2 w-7 text-gray-600 cursor-pointer lg:hidden md:hidden`}
        onClick={() => setactive("block")}
      />

      <div
        className={`md:block ${active} w-80 h-[100vh] bg-gray-900 text-gray-400`}
      >
        <div className="flex pt-5 pl-5 ">
          <img src={logo} className="w-[9rem]" />
        </div>
        <div className="pt-7">
          <div className="flex flex-row items-center w-100 mx-3 pl-3 py-2 rounded-lg hover:bg-gray-800 ">
            <HomeIcon className="mr-3 h-5 w-5 text-gray-500" />
            <a href="/" className="cursor-pointer text-[1rem]">Dashboard</a>
          </div>
          <div className="flex flex-row items-center w-100 mx-3 pl-3 py-2 rounded-lg hover:bg-gray-800 ">
            <MapIcon className="mr-3 h-5 w-5 text-gray-500" />
            
            <a href="/map-location" className="cursor-pointer text-[1rem]">Map Locations</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
