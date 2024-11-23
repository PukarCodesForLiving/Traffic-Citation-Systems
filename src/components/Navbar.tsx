import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <button className="text-white p-2 rounded-md lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-white text-xl font-bold ml-2">TCRS</h1>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5 text-gray-300" />
                </div>
                <input
                  type="text"
                  className="bg-indigo-500 text-white placeholder-gray-300 block w-full pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:text-sm"
                  placeholder="Search..."
                />
              </div>
            </div>
            
            <button className="ml-4 text-white p-2 rounded-md hover:bg-indigo-500">
              <Bell className="h-6 w-6" />
            </button>
            
            <button className="ml-4 text-white p-2 rounded-md hover:bg-indigo-500">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}