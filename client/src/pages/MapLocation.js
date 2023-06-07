import React from 'react'
import Header from '../components/Header'

function MapLocation() {
  return (
    <div className='w-[100%]'>
      <Header/>
      <div>
      <div className="my-4 px-10">
      <label className="block">
        Project Cost:
        <input type="number" name="projectCost" className="ml-3 border border-gray-300 rounded p-1" />
      </label>
      <div className='flex flex-row py-3'>
      <label className="flex items-center">
        Cost per sqft:
        <input type="number" name="projectCost" className="ml-3 border border-gray-300 rounded p-1" />
      </label> 
      <p className='px-5'>|</p>
        <label className="flex items-center">
        Cost per sqyd:
        <input type="number" name="projectCost" className="ml-3 border border-gray-300 rounded p-1" />
      </label> 
      </div>
      <div>
      <label className="block">
        Base size :
        <input type="number" name="projectCost" className="ml-3 border border-gray-300 rounded p-1" />
      </label>
      </div>
      <div className='py-3'>
      <label className="block">
        Highway or zone:
        <input  name="projectCost" className="ml-3 border border-gray-300 rounded p-1" />
      </label>
      </div>
      <div>
      <label className="block">
       Location:
        <input  name="projectCost" className="ml-3 border border-gray-300 rounded p-1" />
      </label>
      </div>
      <div className='py-3'>
      <label className="block">
       Landmark:
        <input  name="projectCost" className="ml-3 border border-gray-300 rounded p-1" />
      </label>
      </div>
      {/* Add other form fields here */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Submit
      </button>
    </div>
      </div>
    </div>
  )
}

export default MapLocation