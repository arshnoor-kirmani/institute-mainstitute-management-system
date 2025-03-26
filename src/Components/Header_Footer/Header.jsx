import React, { useState } from "react";
import "./Header.css";
import {
  BellSimple,
  Chats,
  GearSix,
  MagnifyingGlass,
} from "@phosphor-icons/react";

export default function Header() {
  const [page, setpage] = useState("Dashboard");
  return (
    <div className="bg-gray-400">
      <h1 className="float-left h-full flex items-center text-2xl px-4 w-fit ">
        {page}
      </h1>
      <div className="flex justify-evenly float-right w-60 h-full items-center mr-3">
        <div className="p-1.5 bg-gray-300 rounded-xl cursor-pointer">
          <MagnifyingGlass size={20} color="#0d0c0e" weight="thin" />
        </div>
        <div className="p-1.5 bg-gray-300 rounded-xl cursor-pointer">
          <Chats size={20} color="#0d0c0e" weight="duotone" />
        </div>
        <div className="p-1.5 bg-gray-300 rounded-xl cursor-pointer">
          <BellSimple size={20} color="#0d0c0e" weight="duotone" />
        </div>
        <div className="p-1.5 bg-gray-300 rounded-xl cursor-pointer">
          <GearSix size={20} color="#0d0c0e" weight="duotone" />
        </div>
        <div className="p-2 bg-gray-300 rounded-xl cursor-pointer">
          <img src="./public/vite.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
