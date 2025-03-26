import {
  HouseLine,
  User,
  Sliders,
  Student,
  GraduationCap,
  Scroll,
  UserCircleGear,
  Books,
  Certificate,
  Tilde,
  CaretDoubleRight,
} from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBox() {
  return (
    <nav className="hidden md:grid w-full h-full bg-gray-600 grid-rows-[10%_88%] gap-[1%]">
      <div className="border-b-1 border-double pb-4 text-[.8rem] w-full h-full flex gap-3 pl-3">
        <img src="public/vite.svg" alt="InstituteLogo" className="w-10" />
        <h1 className="h-full flex items-center">Hope Group of Insitutions</h1>
      </div>
      <ul className="w-full h-full flex flex-col gap-1 ">
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center">
          <NavLink
            to="/"
            className="grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full"
          >
            <HouseLine size={28} weight="duotone" />
            <span className="pl-3 capitalize">Dashboard</span>
            <CaretDoubleRight size={16}></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center">
          <NavLink
            to="/profile"
            className={
              "grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full"
            }
          >
            <User size={28} weight="duotone" />
            <span className="pl-3 capitalize">profile</span>
            <CaretDoubleRight size={16}></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center">
          <NavLink
            to="/siteSetting"
            className={
              "grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full"
            }
          >
            <Sliders size={28} weight="duotone" />
            <span className="pl-3 capitalize">site Setting</span>
            <CaretDoubleRight size={16}></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center">
          <NavLink
            to="/students"
            className={
              "grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full"
            }
          >
            <Student size={28} weight="duotone" />
            <span className="pl-3 capitalize">students</span>
            <CaretDoubleRight size={16}></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center">
          <NavLink
            to="/teachers"
            className={
              "grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full"
            }
          >
            <GraduationCap size={28} weight="duotone" />
            <span className="pl-3 capitalize">teachers</span>
            <CaretDoubleRight size={16}></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center">
          <NavLink
            to="/exam"
            className={
              "grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full"
            }
          >
            <Scroll size={28} weight="duotone" />
            <span className="pl-3 capitalize">exam</span>
            <CaretDoubleRight size={16}></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center">
          <NavLink
            to="/mangeruser"
            className={
              "grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full"
            }
          >
            <UserCircleGear size={28} weight="duotone" />
            <span className="pl-3 capitalize">manger user</span>
            <CaretDoubleRight size={16}></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center">
          <NavLink
            to="/courses"
            className={
              "grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full"
            }
          >
            <Books size={28} weight="duotone" />
            <span className="pl-3 capitalize">courses</span>
            <CaretDoubleRight size={16}></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full border-b-1 flex items-center">
          <NavLink
            to="/marksheet"
            className={
              "grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full"
            }
          >
            <Certificate size={28} weight="duotone" />
            <span className="pl-3 capitalize">marksheet</span>
            <CaretDoubleRight size={16}></CaretDoubleRight>
          </NavLink>
        </li>
        <li className="cursor-pointer w-full h-full flex items-center">
          <NavLink
            to="/feesReport"
            className={
              "grid grid-cols-[20%_70%_10%] text-[1rem] items-center justify-center px-3 w-full h-full"
            }
          >
            <Tilde size={28} weight="duotone" />
            <span className="pl-3 capitalize">fees Report</span>
            <CaretDoubleRight size={16}></CaretDoubleRight>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
