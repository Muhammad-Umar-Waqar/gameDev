'use client'
import ArcadeList from '@/components/admin/ArcadeList'
import React, { useState } from 'react'

function Page() {

    const arcadeList = [
        { id: 1, name: 'Manager 123-123-1' },
        { id: 2, name: 'Manager 123-123-2' },
        { id: 3, name: 'Manager 123-123-3' },
        { id: 4, name: 'Manager 123-123-4' },
        { id: 5, name: 'Manager 123-123-5' },
        { id: 6, name: 'Manager 123-123-6' },
        { id: 7, name: 'Manager 123-123-7' },
        { id: 8, name: 'Manager 123-123-8' },
        { id: 9, name: 'Manager 123-123-9' },
        { id: 10, name: 'Manager 123-123-10' },
      ];


    
      const title = "Manager's List"
  return (
    <div>
        <h1 className='text-xl font-bold my-3'>Manager Management</h1>
       
        <div className='flex md:flex-row gap-2 flex-col items-center justify-around'>
        <ArcadeList arcadeList={arcadeList} title={title}/>  

        
        <form className="sm:ml-[20px] flex flex-col items-center justify-center space-y-6 mx-2 w-[245px] sm:w-[400px] md:w-[500px] rounded-lg shadow-md bg-white p-6">
            {/* Form Title */}
    <h1 className="text-start w-full text-2xl font-bold text-custom-blue mb-4">
        Add Game
    </h1>

    {/* First Field */}
    <div className="grid grid-cols-3 items-center gap-4 w-full">
        <label htmlFor="arcade1" className="text-left font-medium text-gray-700">
            Game Name
        </label>
        <input
            type="text"
            id="arcade1"
            name="arcade1"
            className="p-2 border border-black  focus:outline-none  rounded-full col-span-2"
       placeholder='Enter Text' />
    </div>

    <div className="grid grid-cols-3 items-center gap-4 w-full">
        <label htmlFor="arcade1" className="text-left font-medium text-gray-700">
            Password
        </label>
        <input
            type="text"
            id="arcade1"
            name="arcade1"
            className="p-2 border border-black  focus:outline-none  rounded-full col-span-2"
       placeholder='Enter Text' />
    </div>
 
    <div className="grid grid-cols-3 items-center gap-4 w-full">
        <label htmlFor="arcade1" className="text-left font-medium text-gray-700">
            Contact No.
        </label>
        <input
            type="text"
            id="arcade1"
            name="arcade1"
            className="p-2 border border-black  focus:outline-none  rounded-full col-span-2"
       placeholder='Enter Text' />
    </div>

    <div className="grid grid-cols-3 items-center gap-4 w-full">
        <label htmlFor="arcade1" className="text-left font-medium text-gray-700">
            Email
        </label>
        <input
            type="text"
            id="arcade1"
            name="arcade1"
            className="p-2 border border-black  focus:outline-none  rounded-full col-span-2"
       placeholder='Enter Text' />
    </div>













    <div className="w-full max-w-xs border border-black  rounded-lg p-2">
      {/* Filter Buttons */}
      <div className="flex sm:flex-row  gap-y-2 sm:gap-y-0 flex-col  sm:space-x-4 mb-4">
        <button className="px-4 py-2 text-white bg-gray-700 rounded-md text-sm">All</button>
        <button className="px-4 py-2 text-white bg-custom-headblue rounded-md text-sm">Selected</button>
        <button className="px-4 py-2 text-white bg-gray-700 rounded-md text-sm">Unselected</button>
      </div>

      {/* List Container */}
      <div className="max-h-[200px] overflow-y-auto">
        <ul>
          {arcadeList.map((arcade) => (
            <li key={arcade.id} className="flex justify-between items-center border-b p-2">
              <span className="text-sm">{arcade.name}</span>
              <input type="checkbox" className="cursor-pointer" />
            </li>
          ))}
        </ul>
      </div>
    </div>
















    <div className="flex justify-end w-full space-x-4">

<button
    type="submit"
    className="bg-custom-headblue text-white py-1 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
>
    Submit
</button>
<button
    type="button"
    className="text-red-500  py-1 px-6 rounded-xl border border-black hover:border-red-600 hover:text-black "
>
    Cancel
</button>
</div>
        </form>
        </div>
    </div>
  )
}

export default Page