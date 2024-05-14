import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Main = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <main className="flex-1 bg-gray-200 flex flex-col p-3 relative">
      {showSidebar && (
        <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-b from-green-400 to-white w-full sm:w-40 flex flex-col justify-between">
          <div className="flex items-center text-black mb-1 mt-20 sm:mt-0">
            <MdDashboard className="text-green-500 text-2xl mr-2 position-relative" />
            <span className="font-bold">Dashboard</span>
          </div>
          <div className="flex items-center text-black mb-1">
            <RiCalendarScheduleLine className="text-green-500 text-2xl mr-2" />
            <span className="font-bold">Appointments</span>
          </div>
          <div className="flex items-center text-black mb-1">
            <IoIosPerson className="text-green-500 text-2xl mr-2" />
            <span className="font-bold">Patient</span>
          </div>
          <div className="flex items-center text-black mb-1">
            <HiOutlineDocumentReport className="text-green-500 text-2xl mr-2" />
            <span className="font-bold">Reports</span>
          </div>
          <div className="flex items-center text-black">
            <IoSettings className="text-green-500 text-2xl mr-2 " />
            <span className="font-bold">Settings</span>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-b from-green-400 to-white absolute top-0 bottom-0 left-0 w-1 ml-0 sm:ml-40 antialiased"></div>

      <div className="flex flex-col sm:flex-row items-start justify-between mb-4" style={{ marginTop: '10px' }}>
        <div className="sm:ml-40 mt-3">
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <div className="relative mt-4 sm:mt-0 sm:ml-0 ml-3 flex items-center">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <FaRegCircleQuestion className="text-gray-400 mr-5" />
            <IoMdNotificationsOutline className="text-gray-400 mr-5" />
            <CgProfile className="text-gray-400 mr-5" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full py-2 pl-10 pr-4 bg-white border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 max-w-xs md:max-w-md"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
      </div>

     
      <div className="sm:hidden fixed top-3 left-3">
        {showSidebar ? (
          <AiOutlineClose className="text-2xl text-gray-700 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
        ) : (
          <GiHamburgerMenu className="text-2xl text-gray-700 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
        )}
      </div>

      <div className="absolute top-0 bottom-0 left-0 bg-gray-400 w-0.5 ml-0 sm:ml-40 antialiased"></div>

      <hr className="border-t border-gray-400" />
    </main>
  );
};

export default Main;











/*import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";

const Main = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <main className="flex-1 bg-gray-200 flex flex-col p-3 relative">
      {showSidebar && (
        <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-b from-green-400 to-white w-full sm:w-40 flex flex-col justify-between">
          <div className="flex items-center text-black mb-1 mt-20 sm:mt-0">
            <MdDashboard className="text-green-500 text-2xl mr-2" />
            <span className="font-bold">Dashboard</span>
          </div>
          <div className="flex items-center text-black mb-1">
            <RiCalendarScheduleLine className="text-green-500 text-2xl mr-2" />
            <span className="font-bold">Appointments</span>
          </div>
          <div className="flex items-center text-black mb-1">
            <IoIosPerson className="text-green-500 text-2xl mr-2" />
            <span className="font-bold">Patient</span>
          </div>
          <div className="flex items-center text-black mb-1">
            <HiOutlineDocumentReport className="text-green-500 text-2xl mr-2" />
            <span className="font-bold">Reports</span>
          </div>
          <div className="flex items-center text-black">
            <IoSettings className="text-green-500 text-2xl mr-2" />
            <span className="font-bold">Settings</span>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-b from-green-400 to-white absolute top-0 bottom-0 left-0 w-1 ml-0 sm:ml-40 antialiased"></div>

      <div className="flex flex-col sm:flex-row items-start justify-between mb-4" style={{ marginTop: '10px' }}>
        <div className="sm:ml-40 mt-3">
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <div className="relative mt-4 sm:mt-0 sm:ml-0 ml-3 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full py-2 pl-10 pr-4 bg-white border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 max-w-xs md:max-w-md"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
        <FaRegCircleQuestion className="ml-2 text-gray-400" />
      </div>

     
      <div className="sm:hidden fixed top-3 left-3">
        {showSidebar ? (
          <AiOutlineClose className="text-2xl text-gray-700 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
        ) : (
          <GiHamburgerMenu className="text-2xl text-gray-700 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
        )}
      </div>

      <div className="absolute top-0 bottom-0 left-0 bg-gray-400 w-0.5 ml-0 sm:ml-40 antialiased"></div>

      <hr className="border-t border-gray-400" />
    </main>
  );
};
<IoMdNotificationsOutline />
export default Main;*/




