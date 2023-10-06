"use client"
import React, { useState, useEffect } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaTh, FaHandshake, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';

const SideBar = () => {
  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleTogglePasswordVisibility = () => {
    setTogglePasswordVisibility(!togglePasswordVisibility);
  };

  const handleToggleCollapse = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleLogout = () => {
    window.location.href = '/login';
  };

  const closeLogoutPopup = () => {
    setShowLogoutPopup(false);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  return (
    <div className={`flex ${toggleCollapse ? 'flex-col w-24 h-[80em]' : 'flex-col w-1/6'} bg-green-700 text-white p-4 font-merriweather`}>

      <div className="ml-12 mt-24 flex items-center">
        <a href="/">
          <img src="/Images/Amalilogo.png" alt="amali" />
        </a>
        <button
          className="text-white text-2xl mt-2 ml-1 cursor-pointer"
          onClick={handleToggleCollapse}
        >
          <CgMenu />
        </button>
      </div>

      <div className={`mt-24 ${toggleCollapse ? 'hidden' : 'block'}`}>

        <div className="ml-4 mb-16">
          <a
            href="/"
            className={`flex ${
              activeLink === '/dashboard'
                ? 'bg-white hover:bg-white hover:text-black text-black'
                : 'bg-white-700 hover:bg-white hover:text-black text-white'
            } w-72 p-8 ml-10 rounded-lg text-2xl font-merriweather`}
          >
            <span>
              <FaTh className="text-3xl mr-8 font-merriweather" />
            </span>
            {!toggleCollapse && <span>Dashboard</span>}
          </a>
        </div>

        <hr className={`w-${toggleCollapse ? '12' : '37'} ml-20 mr-12 mb-12`} />

        <div className="ml-4 mb-16">
          <a
            href="/sponsorship"
            className={`flex ${
              activeLink === '/sponsorship'
                ? 'bg-white hover:bg-white hover:text-black text-black'
                : 'bg-white-700 hover:bg-white hover:text-black text-white'
            } w-72 p-8 ml-10 rounded-lg text-2xl font-merriweather`}
          >
            <span>
              <FaHandshake
                className={`text-3xl mr-8 font-merriweather ${
                  toggleCollapse ? 'w-6' : ''
                }`}
              />
            </span>
            {!toggleCollapse && <span>Sponsorship</span>}
          </a>
        </div>

        <hr className={`w-${toggleCollapse ? '12' : '37'} ml-20 mr-12`} />

        <div className="ml-4 mb-16 mt-4">
          <a
            href="/contact"
            className={`flex ${
              activeLink === '/contact'
                ? 'bg-white hover:bg-white hover:text-black text-black'
                : 'bg-white-700 hover:bg-white hover:text-black text-white'
            } w-72 p-8 ml-10 rounded-lg text-2xl font-merriweather`}
          >
            <span>
              <FaEnvelope className="text-3xl mr-8 font-merriweather" />
            </span>
            {!toggleCollapse && <span>Message</span>}
          </a>
        </div>

        <hr className={`w-${toggleCollapse ? '12' : '37'} ml-20 mr-12`} />

        <div className="ml-4 mt-24">
          <a
            href="/setting"
            className={`flex ${
              activeLink === '/setting'
                ? 'bg-white hover:bg-white hover:text-black text-black'
                : 'bg-white-700 hover:bg-white hover:text-black text-white'
            } w-72 p-8 ml-10 rounded-lg text-2xl font-merriweather`}
          >
            <span>
              <FaCog
                className={`text-3xl mr-8 font-merriweather ${
                  toggleCollapse ? 'w-6' : ''
                }`}
              />
            </span>
            {!toggleCollapse && <span>Setting</span>}
          </a>
        </div>

        <div className="ml-4 mt-16" onClick={handleLogoutClick}>
          <a
            href="/logout"
            className={`flex ${
              activeLink === '/logout'
                ? 'bg-white hover:bg-white hover:text-black text-black'
                : 'bg-white-700 hover:bg-white hover:text-black text-white'
            } w-72 p-8 ml-10 rounded-lg text-2xl font-merriweather`}
          >
            <span>
              <FaSignOutAlt
                className={`text-3xl mr-8 font-merriweather ${
                  toggleCollapse ? 'w-6' : ''
                }`}
              />
            </span>
            {!toggleCollapse && <span>Logout</span>}
          </a>
        </div>

      </div>

      <span
        className={`absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer ${
          toggleCollapse ? 'block' : 'hidden'
        }`}
        onClick={handleToggleCollapse}
      >
        <div
          className={`text-white text-2xl mt-2 ml-1 ${
            toggleCollapse ? 'rotate-0' : 'rotate-90'
          }`}
        ></div>
      </span>

      {showLogoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg w-96 max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-between">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-gray-400"
                onClick={closeLogoutPopup}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default SideBar;



// "use client"
// import React, { useState, useEffect } from 'react';
// import { FaThLarge, FaHandshake, FaEnvelope, FaCog, FaSignOutAlt, FaTh } from 'react-icons/fa';

// const SideBar = () => {
//   const [activeLink, setActiveLink] = useState('');
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);

//   useEffect(() => {
//     const currentPath = window.location.pathname;
//     setActiveLink(currentPath);
//   }, []);

//   const handleLogoutClick = () => {
//     setShowLogoutPopup(true);
//   };

//   const handleLogout = () => {
//     window.location.href = '/login';
//   };

//   const closeLogoutPopup = () => {
//     setShowLogoutPopup(false);
//   };

//   return (
//     <div className="flex flex-col w-1/6 bg-green-700 text-white p-4 font-merriweather">

//       <div className="ml-12 mt-24 flex items-center">
//         <a href="/">
//           <img src="/Images/Amalilogo.png" alt="amali" />
//         </a>
//       </div>

//       <div className="mt-24">

//         <div className="ml-4 mb-16">
//           <a
//             href="/"
//             className={`flex ${
//               activeLink === '/dashboard'
//                 ? 'bg-white hover.bg-white hover.text-black text-black'
//                 : 'bg-white-700 hover.bg-white hover.text-black text-white'
//             } w-72 p-8 ml-10 rounded-lg text-2xl font-merriweather`}
//           >
//             <span>
//               <FaThLarge className="text-3xl mr-8 font-merriweather" />
//             </span>
//             <span>Dashboard</span>
//           </a>
//         </div>

//         <hr className="w-37 ml-20 mr-12 mb-12" />

//         <div className="ml-4 mb-16">
//           <a
//             href="/sponsorship"
//             className={`flex ${
//               activeLink === '/sponsorship'
//                 ? 'bg-white hover.bg-white hover.text-black text-black'
//                 : 'bg-white-700 hover.bg-white hover.text-black text-white'
//             } w-72 p-8 ml-10 rounded-lg text-2xl font-merriweather`}
//           >
//             <span>
//               <FaHandshake className="text-3xl mr-8 font-merriweather" />
//             </span>
//             <span>Sponsorship</span>
//           </a>
//         </div>

//         <hr className="w-37 ml-20 mr-12 mb-12" />

//         <div className="ml-4 mb-16 mt-4">
//           <a
//             href="/contact"
//             className={`flex ${
//               activeLink === '/contact'
//                 ? 'bg-white hover.bg-white hover.text-black text-black'
//                 : 'bg-white-700 hover.bg-white hover.text-black text-white'
//             } w-72 p-8 ml-10 rounded-lg text-2xl font-merriweather`}
//           >
//             <span>
//               <FaEnvelope className="text-3xl mr-8 font-merriweather" />
//             </span>
//             <span>Message</span>
//           </a>
//         </div>

//         <hr className="w-37 ml-20 mr-12 mb-12" />

//         <div className="ml-4 mt-24">
//           <a
//             href="/setting"
//             className={`flex ${
//               activeLink === '/setting'
//                 ? 'bg-white hover.bg-white hover.text-black text-black'
//                 : 'bg-white-700 hover.bg-white hover.text-black text-white'
//             } w-72 p-8 ml-10 rounded-lg text-2xl font-merriweather`}
//           >
//             <span>
//               <FaCog className="text-3xl mr-8 font-merriweather" />
//             </span>
//             <span>Setting</span>
//           </a>
//         </div>

//         <div className="ml-4 mt-16">
//           <button
//             className="flex bg-white hover.bg-white hover.text-black text-black w-72 p-8 ml-10 rounded-lg text-2xl font-merriweather"
//             onClick={handleLogoutClick}
//           >
//             <span>
//               <FaSignOutAlt className="text-3xl mr-8 font-merriweather" />
//             </span>
//             <span>Logout</span>
//           </button>
//         </div>

//       </div>

//       {showLogoutPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">

//           <div className="bg-white p-6 rounded-lg w-96 max-w-md">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Are you sure you want to log out?
//             </h2>
//             <div className="flex justify-between">
//               <button
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium hover.bg-gray-400"
//                 onClick={closeLogoutPopup}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover.bg-red-600"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default SideBar;