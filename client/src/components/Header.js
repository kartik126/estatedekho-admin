import React from "react";
import { UserIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div
      className="flex flex-row justify-items-center cursor-pointer py-3 px-2"
      style={{ display: "flex", justifyContent: "end" }}
    >
      <div className="flex flex-row bg-gray-200 px-4 py-1 rounded-full ">
        <UserIcon className="text-gray-900 h-5 w-5 text-gray-500" />
        <p className="pl-2 text-[1rem] ">Kartik</p>
      </div>
    </div>
  );
}

export default Header;
