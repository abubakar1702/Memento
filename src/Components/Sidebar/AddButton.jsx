import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (e)=>{
    console.log(e.target)
  }

  return (
    <div>
      <div className="flex justify-center items-center p-2">
        <div ref={dropdownRef} className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="bg-white rounded-full text-black px-8 py-2"
          >
            Add Note <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </button>

          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {/* Dropdown content goes here */}
              <div className="py-1">
                <a
                  onClick={handleClick}
                  href="#"
                  className="block px-4 py-2 text-center text-lg text-gray-700 hover:bg-gray-100"
                >
                  Note
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-lg text-center text-gray-700 hover:bg-gray-100"
                >
                  Task
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddButton;
