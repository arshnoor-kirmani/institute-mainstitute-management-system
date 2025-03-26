import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../Header_Footer";
import NavBox from "../NavContainer/NavBox";
export default function Layout() {
  return (
    <div className="bg-red-400 w-screen h-screen grid grid-cols-[15%_85%]">
      <NavBox></NavBox>
      <div className="bg-purple-500 w-full h-full grid grid-rows-[10%_minmax(85%,1fr)_5%]">
        <Header></Header>
        <div className="w-full h-full overflow-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
