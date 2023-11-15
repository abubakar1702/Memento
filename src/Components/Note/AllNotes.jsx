import React from 'react'
import UserContext from '../../Context/UserContext'
import NoteText from './NoteText'

const AllNotes = () => {

  return (
    <div className='h-auto flex flex-wrap overflow-hidden sm:ml-56'>
        <NoteText />
    </div>
  )
}

export default AllNotes