// "use client"
// import React from 'react';
// const HomePage = () => {
//   return (
//     <div className="relative h-screen mb-32">

//       <div className="overlay absolute left-0 w-full h-full bg-blue opacity-100">
//         <img src="/Images/Geoffrey.jpeg" alt="Background" className="w-full h-full object-cover opacity-" />
//       </div>

//       <div className="flex justify-between items-center p-4 relative">
        
//         <div className="z-10">
//           <img src='/Images/Amalilogo.png' className='w-36' alt="Logo" />
//         </div>

//         <div className="flex items-center z-10 mr-24">
//           <button className="signup bg-transparent hover:bg-green-700 text-white hover:text-white border border-green-700 px-24 py-8 rounded-lg mr-2 transition duration-300 text-3xl">Sign Up</button>
//           <button className="signin bg-transparent hover:bg-green-700 text-white hover:text-white border border-green-700 px-24 py-8 rounded-lg ml-32 transition duration-300 text-3xl">Sign In</button>
//         </div>

//       </div>

//       <div className="content absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//         <h1 className="text-4xl font-bold font-merriweather">Welcome to Amali</h1>
//         <p className="text-6xl font-bold mt-4 ml-96 font-merriweather">Track Your Sponsorship Progress</p>
//         <button className='start-button bg-green-700 text-white px-24 py-6 mt-24 rounded-full hover:bg-black text-lg font-merriweather'>Get Started</button>
//       </div>

//     </div>
//   );
// }

// export default HomePage;



// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="relative h-screen mb-32">
//       {/* Video Background */}
//       <iframe
//         title="YouTube Video"
//         width="100%"
//         height="100%"
//         src="https://www.youtube.com/embed/ybbfXlybjds?autoplay=1&mute=1&controls=0&loop=1"
//         frameborder="0"
//         allowfullscreen
//         className="absolute left-0 top-0 w-full h-full object-cover"
//       ></iframe>

//       <div className="flex justify-between items-center p-4 relative">
//         {/* Logo */}
//         <div className="z-10">
//           <img src='/Images/Amalilogo.png' className='w-36' alt="Logo" />
//         </div>

//         {/* Sign Up and Sign In Buttons */}
//         <div className="flex items-center z-10">
//           <button className="signup bg-transparent hover:bg-green-700 text-white hover:text-white border border-green-700 px-8 py-3 rounded-lg mr-4 transition duration-300 text-xl">Sign Up</button>
//           <button className="signin bg-transparent hover:bg-green-700 text-white hover:text-white border border-green-700 px-8 py-3 rounded-lg transition duration-300 text-xl">Sign In</button>
//         </div>
//       </div>

//       <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//         {/* Welcome Message */}
//         <h1 className="text-4xl font-bold font-merriweather">Welcome to Amali</h1>
//         <p className="text-5xl font-bold mt-4 font-merriweather">Track Your Sponsorship Progress</p>
//         <button className='start-button bg-green-700 text-white px-16 py-4 mt-12 rounded-full hover:bg-black text-lg font-merriweather'>Get Started</button>
//       </div>
//     </div>
//   );
// }

// export default HomePage;



// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="bg-gradient-to-b from-green-700 to-blue-700 h-screen flex flex-col justify-center items-center">
//       <div className="text-white text-center">

//         <h1 className="text-8xl font-bold my-6 font-merriweather">Welcome to Amali Portal</h1>
//         <p className="text-5xl mb-8 font-merriweather">Track Your Sponsorship Progress</p>

//         <div className="flex justify-center items-center space-x-12">
//           <a href="/signup" className="border border-white text-white py-6 px-8 w-72 rounded-lg text-xl font-semibold transition duration-300 transform hover:scale-105 font-merriweather">Sign Up</a>
//           <a href="/signin" className="border border-white text-white py-6 px-8 w-72 rounded-lg text-xl font-semibold transition duration-300 transform hover:scale-105 font-merriweather">Sign In</a>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="bg-gradient-to-b from-green-400 to-red-400 h-screen flex flex-col justify-center items-center">
//       <div className="text-white text-center">

//         <h1 className="text-8xl font-bold my-6 font-merriweather">Welcome to Amali Portal</h1>
//         <p className="text-5xl mb-8 font-merriweather">Track Your Sponsorship Progress</p>

//         <div className="flex justify-center items-center space-x-12">
//           <a href="/signup" className="border border-white text-white py-6 px-8 w-72 rounded-lg text-xl font-semibold transition duration-300 transform hover:scale-105 font-merriweather">Sign Up</a>
//           <a href="/signin" className="border border-white text-white py-6 px-8 w-72 rounded-lg text-xl font-semibold transition duration-300 transform hover:scale-105 font-merriweather">Sign In</a>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default HomePage;



"use client"
import React from 'react';

const HomePage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('/Images/Eliudkip.png')`, 
      }}
    >
      <div className="text-white text-center">

        <h1 className="text-8xl font-bold my-6 font-merriweather">Welcome to Amali Portal</h1>
        <p className="text-5xl mb-8 font-merriweathe">Track Your Sponsorship Progress</p>

        <div className="flex justify-center items-center space-x-12">
          <a href="/signup" className="border border-white text-white py-6 px-8 w-72 rounded-lg text-xl font-semibold transition duration-300 transform hover:scale-105 font-merriweathe">Sign Up</a>
          <a href="/signin" className="border border-white text-white py-6 px-8 w-72 rounded-lg text-xl font-semibold transition duration-300 transform hover:scale-105 font-merriweathe">Sign In</a>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;

// import React from 'react';

// const HomePage = () => {
//   return (
//     <div
//       className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
//       style={{
//         backgroundImage: `url('/Images/Eliudkip.png')`,
//       }}
//     >
//       <div className="text-white text-center">
//         <h1 className="text-8xl font-bold my-6 font-merriweather">Welcome to Amali Portal</h1>
//         <p className="text-5xl mb-8 font-merriweather">Track Your Sponsorship Progress</p>

//         <div className="flex justify-center items-center space-x-12">
//           <a
//             href="/signup"
//             className="border border-white text-white py-6 px-6 w-72 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 font-merriweather"
//           >
//             Sign Up
//           </a>
//           <a
//             href="/signin"
//             className="border border-white text-white py-6 px-6 w-72 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 font-merriweather"
//           >
//             Sign In
//           </a>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default HomePage;

// import React from 'react';

// const HomePage = () => {
//   return (
//     <div
//       className="h-screen bg-gray-100 flex flex-col justify-center items-center"
//       style={{
//         // You can use a light gray background color here
//         // instead of an image if you prefer.
//         // backgroundImage: `url('/Images/Eliudkip.png')`,
//       }}
//     >
//       <div className="text-black text-center">
//         <h1 className="text-8xl font-bold my-6 font-merriweather">Welcome to Amali Portal</h1>
//         <p className="text-5xl mb-8 font-merriweather">Track Your Sponsorship Progress</p>

//         <div className="flex justify-center items-center space-x-12">
//           <a
//             href="/signup"
//             className="bg-green-700 text-white py-6 px-6 w-72 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 font-merriweather"
//           >
//             Sign Up
//           </a>
//           <a
//             href="/signin"
//             className="bg-green-700 text-white py-6 px-6 w-72 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 font-merriweather"
//           >
//             Sign In
//           </a>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default HomePage;

// "use client"
// import React from 'react';

// const HomePage = () => {
//   return (
//     <div
//       className="h-screen bg-white bg-pattern flex flex-col justify-center items-center"
//     >
//       <div className="text-black text-center">
//         <h1 className="text-8xl font-bold my-6 font-merriweather">Welcome to Amali Portal</h1>
//         <p className="text-5xl mb-8 font-merriweather">Track Your Sponsorship Progress</p>

//         <div className="flex justify-center items-center space-x-12">
//           <a
//             href="/signup"
//             className="bg-green-700 text-white py-6 px-6 w-72 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 font-merriweather"
//           >
//             Sign Up
//           </a>
//           <a
//             href="/signin"
//             className="bg-green-700 text-white py-6 px-6 w-72 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 font-merriweather"
//           >
//             Sign In
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';

// const HomePage = () => {
//   return (
//     <div
//       className="h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col justify-center items-center"
//     >
//       <div className="text-black text-center">
//         <h1 className="text-8xl font-bold my-6 font-merriweather">Welcome to Amali Portal</h1>
//         <p className="text-5xl mb-8 font-merriweather">Track Your Sponsorship Progress</p>

//         <div className="flex justify-center items-center space-x-12">
//           <a
//             href="/signup"
//             className="bg-green-700 text-white py-6 px-6 w-72 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 font-merriweather"
//           >
//             Sign Up
//           </a>
//           <a
//             href="/signin"
//             className="bg-green-700 text-white py-6 px-6 w-72 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 font-merriweather"
//           >
//             Sign In
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React from 'react';

// const HomePage = () => {
//   return (
//     <div
//       className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
//       style={{
//         backgroundImage: `url('/Images/Eliud.png')`, // Replace with your image path
//       }}
//     >
//       <div className="text-green-700 text-center">
//         <h1 className="text-8xl font-bold my-6 font-merriweather">Welcome to Amali Portal</h1>
//         <p className="text-5xl mb-8 font-merriweather">Track Your Sponsorship Progress</p>

//         <div className="flex justify-center items-center space-x-12">
//           <a
//             href="/signup"
//             className="bg-green-700 text-white py-6 px-6 w-72 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 font-merriweather"
//           >
//             Sign Up
//           </a>
//           <a
//             href="/signin"
//             className="bg-green-700 text-white py-6 px-6 w-72 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 font-merriweather"
//           >
//             Sign In
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
