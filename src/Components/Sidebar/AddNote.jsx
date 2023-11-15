import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faNoteSticky,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const AddNote = () => {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className="flex justify-center">
      {!isButtonClicked && (
        <button
          className="bg-white rounded-full py-2 m-2 px-10 shadow-sm"
          onClick={handleButtonClick}
        >
          Add Note <FontAwesomeIcon icon={faPlus} />
        </button>
      )}

      {isButtonClicked && (
        <div className="flex justify-center">
          <button className="bg-white rounded-full py-2 m-2 px-8 shadow-sm origin-right">
            <FontAwesomeIcon icon={faTasks} />
          </button>
          <NavLink to="/texteditor">
            <button className="bg-white rounded-full py-2 m-2 px-8 shadow-sm origin-left">
              <FontAwesomeIcon icon={faNoteSticky} />
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default AddNote;
