import React, { useContext } from "react";
import Texteditor from "./Texteditor";
import UserContext from "../../Context/UserContext";

const NoteText = ({}) => {
  const { noteText, noteTitle,notes } = useContext(UserContext);
  return (
    <div className="flex">
      {notes.map((note, index) => (
        <div key={index} className="w-48 h-64 border rounded-md p-4 m-2 overflow-auto no-scrollbar bg-yellow-200">
          <h1 className="text-xl font-bold py-2">{note.title}</h1>
          <p className="mt-2">{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteText;
