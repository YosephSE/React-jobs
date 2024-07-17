import React from 'react'
import logo from '../assets/logo.png'
const NavBar = () => {
  return (
    <>
    <div className='bg-indigo-700 flex justify-between text-white py-2 px-4'>
      <div className="logo flex items-center">
        <img src={logo} alt="React Logo" className='h-14 w-14 b-white p-1'/>
        <h1 className='text-2xl font-bold hidden sm:block'>React Jobs</h1>
      </div>
      <div className="links flex items-center text-xl">
        <ul className='flex items-center '>
            <li className='p-3 bg-black m-1 rounded-lg'>Home</li>
            <li className='p-3  m-1 rounded-lg'>Jobs</li>
            <li className='p-3  m-1 rounded-lg'>Add Job</li>
        </ul>
      </div>
    </div>
    <hr className='bg-indigo-700 text-indigo-900'/>
    </>
  )
}

export default NavBar
