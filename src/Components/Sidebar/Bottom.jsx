import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus,faNoteSticky,faTasks, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import NavItems from "./NavItems";
import BottomItems from "./BottomItems";
import { NavLink } from "react-router-dom";

const Bottom = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dropupVisible, setDropupVisible] = useState(false);
  const barRef = useRef(null);

  const handleBar = () => {
    setSidebar(!sidebar);
    setDropupVisible(false); // Close dropup when opening sidebar
  };

  const handleAddNote = () => {
    setDropupVisible(!dropupVisible);
  };

  const handleOutsideClick = (event) => {
    if (
      (sidebar && !barRef.current.contains(event.target) && !event.target.closest(".sidebar")) ||
      (dropupVisible && !event.target.closest(".add-note-button"))
    ) {
      setSidebar(false);
      setDropupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [sidebar, dropupVisible]);

  return (
    <div className="relative">
      {sidebar && (
        <div className="bg-blue-500 h-screen w-56 z-10 origin-left absolute top-0 left-0 sidebar">
          <ul className="h-screen py-2 flex flex-col justify-between">
            <li>
              <Logo />
            </li>
            <li>
              <NavItems />
            </li>
            <li>
              <BottomItems />
            </li>
          </ul>
        </div>
      )}
      <div
        className={`sm:hidden w-full bg-blue-500 fixed bottom-0 ${
          sidebar ? "z-0" : "z-10"
        }`}
      >
        <ul
          ref={barRef}
          className="flex justify-around items-center text-white sm:hidden"
        >
          <li onClick={handleBar} className="my-6 text-xl">
            <FontAwesomeIcon icon={faBars} />
          </li>
          <li className="relative my-6 text-xl px-6 py-2 rounded-full text-black bg-white add-note-button">
            <span onClick={handleAddNote}>Add Note</span>
            <FontAwesomeIcon icon={faPlus} />
            {dropupVisible && (
              <div className="absolute w-fit mt-2 bottom-12 bg-white p-2 rounded-md shadow-lg">
                <NavLink to="/texteditor">
                <div
                  className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                  onClick={() => console.log("Note selected")}
                >
                  <FontAwesomeIcon icon={faNoteSticky} /> Note
                </div>
                </NavLink>
                <div
                  className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                  onClick={() => console.log("Todo selected")}
                >
                  <FontAwesomeIcon icon={faTasks} /> To-do
                </div>
              </div>
            )}
          </li>
          <li className="my-6 text-xl">
            <FontAwesomeIcon icon={faSearch} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottom;
