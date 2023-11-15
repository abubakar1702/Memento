import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, noteTitle, setNoteTitle, noteText, setNoteText, notes, setNotes }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;