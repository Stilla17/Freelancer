import React from 'react'

function Filter() {
  return (
<div className="flex justify-center items-start min-h-screen">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-800">Project type</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="fixedPrice" className="text-sm text-gray-700">Fixed Price</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="hourlyRate" className="text-sm text-gray-700">Hourly Rate</label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-800">Fixed price</h3>
            <div className="flex justify-between text-sm text-gray-500">
              <span>$0</span>
              <span>$1000k+</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000000"
              step="1000"
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-800">Hourly price</h3>
            <div className="flex justify-between text-sm text-gray-500">
              <span>$0</span>
              <span>$1000</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              step="1"
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-semibold text-gray-800">Skills</h3>
            <button className="text-sm text-blue-600 font-medium hover:underline">View All</button>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
            />
          </div>
          <div className="space-y-2">
                hello
                hello
                hello
                hello
                hello
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-800">Project location</h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
            />
          </div>
            <h3 className="text-base font-semibold text-gray-800">Languages</h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={true}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="ui" className="text-sm text-gray-700">UI</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
