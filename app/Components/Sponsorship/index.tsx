// 'use client'
// import React, { useState } from 'react';
// import { FaWindows, FaHandshake, FaEnvelope, FaCog, FaEye, FaEyeSlash, FaSignOutAlt, FaSearch } from 'react-icons/fa';


// const Sponsorship = () => {
//   const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);

//   const handleTogglePasswordVisibility = () => {
//     setTogglePasswordVisibility(!togglePasswordVisibility);
//   };
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState<{
//     id: number;
//     athleteName: string;
//     event: string;
//     target: string;
//     urgent: boolean;
//     image: string;
//   }[]>([]);

//   const sponsorshipData = [
//     {
//       id: 1,
//       athleteName: 'Kiplagat Kiyegon',
//       event: 'Berlin Marathon',
//       target: '$ 289,800',
//       urgent: true,
//       image: '/Images/kiplagat.png',
//     },
//     {
//       id: 2,
//       athleteName: 'Faith Kipyegon',
//       event: 'Berlin Marathon',
//       target: '$ 789,000',
//       urgent: false,
//       image: '/Images/chebet.jpeg',
//     },
//     {
//       id: 3,
//       athleteName: 'Geoffrey Kamworor',
//       event: 'Berlin Marathon',
//       target: '$ 123,000',
//       urgent: true,
//       image: '/Images/Geoffrey.jpeg',
//     },
//     {
//       id: 4,
//       athleteName: 'Vivian Jelimo',
//       event: 'Berlin Marathon',
//       target: '$ 123,000',
//       urgent: false,
//       image: '/Images/vivian.jpeg',
//     },
//     {
//       id: 5,
//       athleteName: 'Eliud Kipchoge',
//       event: 'Berlin Marathon',
//       target: '$ 289,800',
//       urgent: true,
//       image: '/Images/kipchoge.jpeg',
//     },
//     {
//       id: 6,
//       athleteName: 'David Rudisha',
//       event: 'Berlin Marathon',
//       target: '$ 789,000',
//       urgent: false,
//       image: '/Images/david.jpeg',
//     },
//     {
//       id: 7,
//       athleteName: 'Gladys Jepkemboi',
//       event: 'Berlin Marathon',
//       target: '$ 123,000',
//       urgent: false,
//       image: '/Images/faith.jpeg',
//     },
//     {
//       id: 8,
//       athleteName: 'Ferdinand Omanyala',
//       event: 'Berlin Marathon',
//       target: '$ 123,000',
//       urgent: true,
//       image: '/Images/omanyala.jpeg',
//     },
//   ];

//   return (
//     <div className="flex ml-4 mt-36 mb-12">

//             <div className="w-1/6 bg-green-700 text-white p-4 font-merriweather">

//         <div>

//           <div className='w-50 ml-10 mt-2'>
//             <a href="/">
//               <img src='/Images/Amalilogo.png' alt='amali' />
//             </a>
//           </div>

//           <div className='mt-36'>

//             <div className='ml-4 mt-16'>
//               <a href="/dashboard" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 p-8 ml-10 rounded-lg text-2xl font-merriweather">
//                 <span><FaWindows className="text-3xl mr-8 text-white-700 font-merriweather" /></span>
//                 Dashboard
//               </a>
//             </div>

//             <hr className='w-37 ml-20 mr-12 mt-16' />

//             <div className='ml-4 mt-16'>
//               <a href="/sponsorship" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 ml-10 p-8 rounded-lg text-2xl font-merriweather">
//                 <span><FaHandshake className="text-3xl mr-8 text-white-700 font-merriweather" /></span>
//                 Sponsorship
//               </a>
//             </div>

//             <hr className='w-37 ml-20 mr-12 mt-16' />

//             <div className='ml-4 mt-16'>
//               <a href="/message" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 ml-10 p-8 rounded-lg text-2xl font-merriweather">
//                 <span><FaEnvelope className="text-3xl mr-8 text-white-700 font-merriweather" /></span>
//                 Message
//               </a>
//             </div>

//             <hr className='w-37 ml-20 mr-12 mt-16' />

//           </div>

//           <div className='ml-4 mt-36'>
//             <a href="/setting" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 ml-10 p-8 rounded-lg text-2xl font-merriweather">
//               <span><FaCog className="text-3xl mr-8 text-white-700 font-merriweather" /></span>
//               Setting
//             </a>
//           </div>

//           <div className='ml-4 mt-16'>
//             <a href="/logout" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 ml-10 p-8 rounded-lg text-2xl font-merriweather">
//               <span><FaSignOutAlt className="text-3xl mr-8 text-white-700 font-merriweather" /></span>
//               Logout
//             </a>
//           </div>

//         </div>
//         <span
//           className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
//           onClick={handleTogglePasswordVisibility}
//           >
//         {togglePasswordVisibility ? <FaEyeSlash /> : <FaEye />}
//        </span>

//       </div>

//       <div className="w-3/4 p-4 ml-16">
        
//         <div className="flex items-center ml-auto"> 

//           <div className="flex items-center ml-96">
//             <div className="ml-96"> 
//               <img src='/Images/JEMMU.jpg' alt='amali' className="w-28 h-24 rounded-full ml-96" /> 
//             </div>
//           </div>

//         </div>

//         <div className="ml-24">

//           <div className="relative flex items-center">
//             <input
//               type="text"
//               className="w-1/4 p-2 pl-8 border border-gray-300 rounded-l font-merriweather"
//               placeholder="Search..."
//               onChange={(e) => {
//                 const query = e.target.value;
//                 setSearchQuery(query);
//               }}
//             />
//             <button
//               className="bg-green-700 text-white rounded-r-full p-3 font-merriweather"
//               onClick={() => {
//                 const query = searchQuery.trim();
//                 const filtered = sponsorshipData.filter(
//                   (item) =>
//                     item.athleteName.toLowerCase().includes(query.toLowerCase()) ||
//                     item.event.toLowerCase().includes(query.toLowerCase())
//                 );
                
//                 setFilteredData(filtered); 
//               }}
//             >
//               <FaSearch />
//             </button>
//           </div>

//         </div>

//         <div className="mt-12 ml-24">
//           <h2 className='text-green-700 text-3xl font-bold font-merriweather'>Urgent Sponsorship</h2>
//           <p className='mt-3 text-2xl font-merriweather'>*These are urgent because their due date is fast approaching</p>
//         </div>

//         <div className="flex flex-wrap gap-16 mt-12 ml-24">
//           {(searchQuery ? filteredData : sponsorshipData).filter(item => item.urgent).map((sponsorship) => (
//             <div
//               key={sponsorship.id}
//               className="w-1/6 bg-gray-100 border border-gray-300 p-4 rounded-lg text-center"
//             >
//               <div className="w-42 h-24 bg-gray-300 rounded-lg mx-auto overflow-hidden">
//                 <img
//                   src={sponsorship.image}
//                   alt={`Image of ${sponsorship.athleteName}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <p className='mt-4 font-bold font-merriweather'>{sponsorship.athleteName}</p>
//               <p className='mt-4'>{sponsorship.event}</p>
//               <p className='mr-4 font-bold mt-2 font-merriweather'>Target</p>
//               <p className='mt-4 font-bold text-green-700'>{sponsorship.target}</p>
//               <hr className="my-4 border-t-8 border-green-700 h-6 w-32 ml-9" />
//               <button className="bg-green-700 text-white py-2 px-8 rounded-full cursor-pointer font-merriweather">
//                 DONATE
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 ml-24">
//           <h2 className='text-green-700 text-3xl font-bold font-merriweather'>Other Sponsorship</h2>
//         </div>
//         <div className="flex flex-wrap gap-16 mt-12 ml-24">
//           {(searchQuery ? filteredData : sponsorshipData).filter(item => !item.urgent).map((sponsorship) => (

//             <div
//               key={sponsorship.id}
//               className="w-1/6 bg-gray-100 border border-gray-300 p-4 rounded-lg text-center"
//             >
//               <div className="w-42 h-24 bg-gray-300 rounded-lg mx-auto overflow-hidden">
//                 <img
//                   src={sponsorship.image}
//                   alt={`Image of ${sponsorship.athleteName}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <p className='mt-4 font-bold font-merriweather'>{sponsorship.athleteName}</p>
//               <p className='mt-4'>{sponsorship.event}</p>
//               <p className='mr-4 font-bold mt-2 font-merriweather'>Target</p>
//               <p className='mt-4 font-bold text-green-700'>{sponsorship.target}</p>
//               <hr className="my-4 border-t-8 border-green-700 h-6 w-32 ml-9" />
//               <button className="bg-green-700 text-white py-2 px-8 rounded-full cursor-pointer font-merriweather">
//                 DONATE
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sponsorship;

"use client"
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
// import Button from '@/app/atoms/Button';
// import Buttons from '@/app/atoms/Buttons';
// import Layout from '../Components/layout';

const Sponsorship = () => {
  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setTogglePasswordVisibility(!togglePasswordVisibility);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<{
    id: number;
    athleteName: string;
    event: string;
    target: string;
    urgent: boolean;
    image: string;
  }[]>([]);

  const sponsorshipData = [
    {
      id: 1,
      athleteName: 'Kiplagat Kiyegon',
      event: 'Berlin Marathon',
      target: '$ 289,800',
      urgent: true,
      image: '/Images/kiplagat.png',
    },
    {
      id: 2,
      athleteName: 'Faith Kipyegon',
      event: 'Berlin Marathon',
      target: '$ 789,000',
      urgent: false,
      image: '/Images/chebet.jpeg',
    },
    {
      id: 3,
      athleteName: 'Geoffrey Kamworor',
      event: 'Berlin Marathon',
      target: '$ 123,000',
      urgent: true,
      image: '/Images/Geoffrey.jpeg',
    },
    {
      id: 4,
      athleteName: 'Vivian Jelimo',
      event: 'Berlin Marathon',
      target: '$ 123,000',
      urgent: false,
      image: '/Images/vivian.jpeg',
    },
    {
      id: 5,
      athleteName: 'Eliud Kipchoge',
      event: 'Berlin Marathon',
      target: '$ 289,800',
      urgent: true,
      image: '/Images/kipchoge.jpeg',
    },
    {
      id: 6,
      athleteName: 'David Rudisha',
      event: 'Berlin Marathon',
      target: '$ 789,000',
      urgent: false,
      image: '/Images/david.jpeg',
    },
    {
      id: 7,
      athleteName: 'Gladys Jepkemboi',
      event: 'Berlin Marathon',
      target: '$ 123,000',
      urgent: false,
      image: '/Images/faith.jpeg',
    },
    {
      id: 8,
      athleteName: 'Ferdinand Omanyala',
      event: 'Berlin Marathon',
      target: '$ 123,000',
      urgent: true,
      image: '/Images/omanyala.jpeg',
    },
    // Add more data items here as needed
  ];

  return (
    // <Layout>
      <div className="bg-white flex justify-center items-center">
        <div className="w-3/4 p-4 mt-6">
          <div className="ml-24">
            <div className="relative flex items-center">
              <input
                type="text"
                className="w-1/2 p-2 pl-8 border border-gray-300 rounded-l font-merriweather"
                placeholder="Search..."
                onChange={(e) => {
                  const query = e.target.value;
                  setSearchQuery(query);
                }}
              />
              <button
                className="bg-green-700 text-white rounded-r-full p-3 font-merriweather"
                onClick={() => {
                  const query = searchQuery.trim();
                  const filtered = sponsorshipData.filter(
                    (item) =>
                      item.athleteName.toLowerCase().includes(query.toLowerCase()) ||
                      item.event.toLowerCase().includes(query.toLowerCase())
                  );

                  setFilteredData(filtered);
                }}
              >
                <FaSearch />
              </button>

              <div className="flex items-center ml-10">
                <div className="ml-10">
                  <img src="/Images/JEMMU.jpg" alt="amali" className="w-32 h-32 rounded-full ml-96" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 ml-24">
            <h2 className='text-red-700 text-3xl font-bold font-merriweather'>Urgent Sponsorship</h2>
          </div>

          <div className="flex flex-wrap gap-24 mt-12">
            {(searchQuery ? filteredData : sponsorshipData).filter(item => item.urgent).map((sponsorship) => (
              <div
                key={sponsorship.id}
                className="w-1/5 bg-gray-100 border border-gray-300 p-2 rounded-lg text-center"
              >
                <div className="w-42 h-32 bg-gray-300 rounded-lg mx-auto overflow-hidden">
                  <img
                    src={sponsorship.image}
                    alt={`Image of ${sponsorship.athleteName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className='mt-4 font-bold font-merriweather'>{sponsorship.athleteName}</p>
                <p className='mt-4'>{sponsorship.event}</p>
                <p className='mr-4 font-bold mt-2 font-merriweather'>Target</p>
                <p className='mt-4 font-bold text-green-700'>{sponsorship.target}</p>
                <hr className="my-4 border-t-8 border-green-700 h-6 w-38" />
                {/* <Buttons/> */}
                <button className="bg-green-700 text-white py-2 px-8 rounded-full cursor-pointer font-merriweather">
                  DONATE
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 ml-24">
            <h2 className='text-green-700 text-3xl font-bold font-merriweather'>Other Sponsorship</h2>
          </div>

          <div className="flex flex-wrap gap-24 mt-12">
            {(searchQuery ? filteredData : sponsorshipData).filter(item => !item.urgent).map((sponsorship) => (
              <div
                key={sponsorship.id}
                className="w-1/5 bg-gray-100 border border-gray-300 p-2 rounded-lg text-center"
              >
                <div className="w-42 h-24 bg-gray-300 rounded-lg mx-auto overflow-hidden">
                  <img
                    src={sponsorship.image}
                    alt={`Image of ${sponsorship.athleteName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className='mt-4 font-bold font-merriweather'>{sponsorship.athleteName}</p>
                <p className='mt-4'>{sponsorship.event}</p>
                <p className='mr-4 font-bold mt-2 font-merriweather'>Target</p>
                <p className='mt-4 font-bold text-green-700'>{sponsorship.target}</p>
                <hr className="my-4 border-t-8 border-green-700 h-6 w-38" />
                {/* <Button/> */}
                <button className="bg-green-700 text-white py-2 px-8 rounded-full cursor-pointer font-merriweather">
                  DONATE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    // </Layout>
  );
};

export default Sponsorship;
