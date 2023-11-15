import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStickyNote,
  faTasks,
  faLock,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <div>
      <ul className="flex flex-col items-start text-white cursor-pointer">
        <NavLink to="/">
          <li className=" flex items-center w-full px-6 rounded-full py-4 hover:text-blue-200">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </li>
        </NavLink>
        <NavLink to="/allnotes">
        <li className="flex items-center w-full px-6 rounded-full py-4 hover:text-blue-200">
          <FontAwesomeIcon icon={faStickyNote} className="mr-2" />
          All Notes
        </li>
        </NavLink>
        <li className=" flex items-center w-full px-6 rounded-full py-4 hover:text-blue-200">
          <FontAwesomeIcon icon={faTasks} className="mr-2" />
          To-dos
        </li>
        <li className="y-2 flex items-center w-full px-6 rounded-full py-4 hover:text-blue-200">
          <FontAwesomeIcon icon={faLock} className="mr-2" />
          Private Notes
        </li>
        <li className="flex items-center w-full px-6 rounded-full py-4 hover:text-blue-200">
          <FontAwesomeIcon icon={faBell} className="mr-2" />
          Reminders
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
