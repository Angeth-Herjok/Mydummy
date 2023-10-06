// ... (previous imports)
"use client"
import { useState } from 'react';
import { FaWindows, FaHandshake, FaEnvelope, FaCog, FaEye, FaEyeSlash, FaSignOutAlt, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setTogglePasswordVisibility(!togglePasswordVisibility);
  };

  return (
    <div className="w-1/6 bg-green-700 text-white p-4 font-merriweather mb-24">
      <div>
        <div className='w-50 ml-10 mt-2'>
          <a href="/">
            <img src='/Images/Amalilogo.png' alt='amali' />
          </a>
        </div>

        <div className='mt-36'>
          <div className='ml-4 mb-16'>
            <a href="/home" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 p-8 ml-10 rounded-lg text-2xl font-merriweather">
              <span><FaHome className="text-3xl mr-8 text-white-700 font-merriweather" /></span> 
              Home
            </a>
          </div>
          
          <hr className='w-37 ml-20 mr-12 mb-16' />

          <div className='ml-4 mt-16'>
            <a href="/dashboard" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 ml-10 p-8 rounded-lg text-2xl font-merriweather">
              <span><FaWindows className="text-3xl mr-8 text-white-700 font-merriweather" /></span> 
              Dashboard
            </a>
          </div>

          <hr className='w-37 ml-20 mr-12 mt-16' />

          <div className='ml-4 mt-16'>
            <a href="/sponsorship" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 ml-10 p-8 rounded-lg text-2xl font-merriweather">
              <span><FaHandshake className="text-3xl mr-8 text-white-700 font-merriweather" /></span> 
              Sponsorship
            </a>
          </div>

          <hr className='w-37 ml-20 mr-12 mt-16' />
          
          <div className='ml-4 mt-16'>
            <a href="/message" className="flex bg-white-700 hover.bg-white hover:text-black text-white w-78 ml-10 p-8 rounded-lg text-2xl font-merriweather">
              <span><FaEnvelope className="text-3xl mr-8 text-white-700 font-merriweather" /></span> 
              Message
            </a>
          </div>

          <hr className='w-37 ml-20 mr-12 mt-16' />
          
        </div>

        <div className='ml-4 mt-36'>
          <a href="/setting" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 ml-10 p-8 rounded-lg text-2xl font-merriweather">
            <span><FaCog className="text-3xl mr-8 text-white-700 font-merriweather" /></span> 
            Setting
          </a>
        </div>

        <div className='ml-4 mt-16'>
          <a href="/logout" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 ml-10 p-8 rounded-lg text-2xl font-merriweather">
            <span><FaSignOutAlt className="text-3xl mr-8 text-white-700 font-merriweather" /></span> 
            Logout
          </a>
        </div>
      </div>

      <span
        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
        onClick={handleTogglePasswordVisibility}
      >
        {togglePasswordVisibility ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default Sidebar;


