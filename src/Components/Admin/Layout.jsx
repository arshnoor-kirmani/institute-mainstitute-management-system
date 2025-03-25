import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Header, Footer } from "../Header_Footer";
export default function App() {
  return (
    <>
      <Header />
      <div className="border-2 border-e-red-700 size-full h-96 grid grid-cols-2 ">
        <nav>
          <h1>Nav Links</h1>
          <ul className="bg-gray-600 text-white p-4 flex justify-evenly flex-col w-40 gap-2">
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/profile">profile</NavLink>
            </li>
            <li>
              <NavLink to="/siteSetting">siteSetting</NavLink>
            </li>
            <li>
              <NavLink to="/students">students</NavLink>
            </li>
            <li>
              <NavLink to="/teachers">teachers</NavLink>
            </li>
            <li>
              <NavLink to="/exam">exam</NavLink>
            </li>
            <li>
              <NavLink to="/mangeruser">mangeruser</NavLink>
            </li>
            <li>
              <NavLink to="/courses">courses</NavLink>
            </li>
            <li>
              <NavLink to="/marksheet">marksheet</NavLink>
            </li>
            <li>
              <NavLink to="/feesReport">feesReport</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
