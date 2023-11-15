import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddButtonOptions = () => {
  const buttonRef = useRef(null);
  const [divVisible, setDivVisible] = useState(false);

  const handleToggle = () => {
    const divElement = buttonRef.current;

    if (divElement) {
      setDivVisible(!divVisible);
      divElement.style.display = divVisible ? "none" : "block";
    }
  };

  return (
    <div className="h-32">
      <div
        ref={buttonRef}
        style={{ display: divVisible ? "block" : "none" }}
        className="bg-white rounded-lg mx-6"
      >
        <div className="flex flex-col">
          <button className="bg-blue-600 rounded-full py-2 text-white m-2 hover:bg-blue-700">
            Note
          </button>
          <button className="bg-green-600 rounded-full py-2 m-2 text-white hover:bg-green-700">
            Task
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleToggle}
          style={{ display: divVisible ? "none" : "block" }}
          className="bg-white rounded-full py-2 m-2 px-8 shadow-sm"
        >
          Add Note <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default AddButtonOptions;
