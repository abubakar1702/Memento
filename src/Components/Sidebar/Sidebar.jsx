import React from "react";
import AddButton from "./AddButton";
import Logo from "./Logo";
import NavItems from "./NavItems";
import BottomItems from "./BottomItems";
import AddNote from "./AddNote";

const Sidebar = () => {
  return (
    <div className="sm:w-56 hidden sm:block bg-blue-500 h-screen fixed">
      <ul className="h-screen flex flex-col">
        <div>
          <li>
            <Logo />
          </li>
          <li>
            <AddNote />
          </li>
        </div>
        <div className="flex flex-col justify-between h-screen mt-6 cursor-pointer">
          <li>
            <NavItems />
          </li>
          <li>
            <BottomItems />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
