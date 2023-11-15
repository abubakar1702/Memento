import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to="/">
    <div className='text-2xl p-4 mb-4 text-white text-center cursor-pointer'>Memento</div>
    </NavLink>
  )
}

export default Logo