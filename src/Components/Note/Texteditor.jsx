import React, { useContext, useRef, useState, useEffect } from "react";
import UserContext from "../../Context/UserContext";


const Texteditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { setNoteTitle, setNoteText, notes, setNotes } = useContext(UserContext);

  const handleSaveNote = () => {
    setNoteTitle(title);
    setNoteText(content);

    setNotes((prevNotes) => [
      ...prevNotes,
      {
        title,
        content,
      },
    ]);

    setTitle('');
    setContent('');
  };
  return (
    <div className="flex flex-col items-center p-4 sm:ml-56">
      <div className="note-header w-full mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="note-title-input w-full p-2 border-none outline-none"
        />
      </div>

      <div className="note-writing-area w-full">
        <textarea
          placeholder="Start writing..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="note-content-textarea w-full p-2 border-none outline-none"
        />
      </div>
      <hr />
      <button
        onClick={handleSaveNote}
        className="py-2 px-6 bg-blue-600 text-white rounded-full"
      >
        Save Note
      </button>
    </div>
  );
};

export default Texteditor;
