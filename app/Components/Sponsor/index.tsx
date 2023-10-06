"use client"
import React, { useState } from 'react';
import { FaWindows, FaHandshake, FaEnvelope, FaCog, FaEye, FaEyeSlash, FaSignOutAlt } from 'react-icons/fa';


const Sponsor = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    amount: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    amount: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = { ...errors };

    if (formData.name.trim() === '') {
      newErrors.name = 'Full Name is required';
      hasErrors = true;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      hasErrors = true;
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      hasErrors = true;
    } else if (!/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password) || !/\d/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one digit';
      hasErrors = true;
    }

    if (formData.amount.trim() === '') {
      newErrors.amount = 'Amount is required';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className='flex ml-4 mb-24'>
      <div className="w-1/6 bg-green-700 text-white p-4 font-merriweather">
        <div>
          <div className='w-50 ml-10 mt-2'>
            <a href="/">
              <img src='/Images/Amalilogo.png' alt='amali' />
            </a>
          </div>
          <div className='mt-36'>
            <div className='ml-4 mt-16'>
              <a href="/dashboard" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 p-8 ml-10 rounded-lg text-2xl font-merriweather">
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
              <a href="/message" className="flex bg-white-700 hover:bg-white hover:text-black text-white w-78 ml-10 p-8 rounded-lg text-2xl font-merriweather">
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
        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>

      </div>

      <div className="flex flex-col md:flex-row justify-between w-3/4 md:w-1/1 p-6 rounded-lg">
        <div className="md:ml-36 mt-10">
          <div className="mb-4 md:mb-0">
            <p className="text-4xl mt-12 font-bold text-green-700">Your Sponsorship will make a difference</p>
          </div>
          <div>
            <h1 className="text-3xl mt-32 font-bold">ENTER AMOUNT</h1>
            <input
              type="text"
              className={`border border-6 border-black text-black py-3 px-4 rounded-lg w-96 h-64 mt-12 font-merriweather ${
                errors.amount ? 'border-red-500' : ''
              }`}
              placeholder="Enter Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
          </div>
          <div className="flex justify-between items-center mt-40 text-3xl">
            <label className="flex items-center">
              <input type="checkbox" id="remember" name="remember" className="mr-2 w-24 h-10 transform scale-150" />
              M-Pesa
            </label>
          </div>
        </div>
        <div className="md:mr-64">
          <h2 className="text-3xl mb-6 mt-64 font-bold">YOUR DETAILS</h2>
          <form className="px-6 mt-12" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="text-xl mb-2 block font-bold font-merriweather">FULL NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-5 border border-gray-300 rounded-lg mt-2 placeholder-black italic font-merriweather ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="Enter Full Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-6 mt-20">
              <label htmlFor="email" className="text-xl mb-2 font-bold block font-merriweather">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-5 border border-gray-300 rounded-lg mt-2 placeholder-black italic font-merriweather ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Enter Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-6 mt-20">
              <label htmlFor="password" className="text-xl mb-2 block font-bold font-merriweather">PASSWORD</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-5 border border-gray-300 rounded-lg mt-2 placeholder-black italic font-merriweather ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter Password"
                />
                <span
                  className="absolute top-1/2 right-3 transform -translate-y-1/2  cursor-pointer"
                  onClick={togglePasswordVisibility}
                  style={{ fontSize: '24px' }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white py-4 px-8 rounded-lg text-2xl cursor-pointer hover:bg-black mt-20 font-merriweather whitespace-nowrap"
            >
              MAKE YOUR DONATION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;



// "use client"
// import React, { useState } from 'react';
// const Donation = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phoneNumber: '',
//     amount: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     phoneNumber: '',
//     amount: '',
//   });

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     let hasErrors = false;
//     const newErrors = { name: '', phoneNumber: '', amount: '' };

//     if (formData.name.trim() === '') {
//       newErrors.name = 'Full Name is required';
//       hasErrors = true;
//     }

//     if (formData.phoneNumber.trim() === '') {
//       newErrors.phoneNumber = 'Phone Number is required';
//       hasErrors = true;
//     } 
//     else if (!/^\d{10}$/g.test(formData.phoneNumber)) {
//       newErrors.phoneNumber = 'Phone Number should be 10 digits';
//       hasErrors = true;
//     }

//     if (formData.amount.trim() === '') {
//       newErrors.amount = 'Amount is required';
//       hasErrors = true;
//     } 
//     else if (!/^[1-9]\d*$/g.test(formData.amount)) {
//       newErrors.amount = 'Amount should be a positive integer';
//       hasErrors = true;
//     }

//     if (hasErrors) {
//       setErrors(newErrors);
//     } 
//     else {
//       console.log('Form submitted:', formData);

//     }
//   };

//   return (
//     <div className='flex-col ml-24 mb-24'>
//       <div className='mt-36 ml-96'>
//         <p className="text-4xl mt-12 font-bold text-green-700">Your Sponsorship will make a difference</p>
//       </div>
//       <div className="flex flex-col md:flex-row justify-between w-3/4 md:w-1/1 p-6 mr-36 rounded-lg">
//         <div className='ml-64'>

//           <h2 className="text-3xl mb-6 mt-64 font-bold">YOUR DETAILS</h2>

//           <form className="px-6 mt-12" onSubmit={handleSubmit}>

//             <div className="mb-6">
//               <label htmlFor="name" className="text-xl mb-2 block font-bold font-merriweather">FULL NAME</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-96 px-4 py-5 border border-gray-300 rounded-lg mt-2 placeholder-black font-merriweather ${
//                   errors.name ? 'border-red-500' : ''
//                 }`}
//                 placeholder="Enter Full Name"
//               />
//               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//             </div>

//             <div className="mb-6 mt-20">
//               <label htmlFor="phoneNumber" className="text-xl mb-2 font-bold block font-merriweather">PHONE NUMBER</label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-5 border border-gray-300 rounded-lg mt-2 placeholder-black font-merriweather ${
//                   errors.phoneNumber ? 'border-red-500' : ''
//                 }`}
//                 placeholder="Enter Phone Number"
//               />
//               {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
//             </div>

//           </form>
//         </div>

//         <div className="md:ml-72 mt-36">

//           <div className='ml-16'>
//             <h1 className="text-3xl mt-28 font-bold">ENTER AMOUNT</h1>
//             <input
//               type="number"
//               className={`border border-6 border-black text-black py-3 px-4 mt-24 rounded-lg w-64 h-24 mt-12 font-merriweather ${
//                 errors.amount ? 'border-red-500' : ''
//               }`}
//               placeholder="Enter Amount"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//             />
//             {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
//           </div>

//           <button
//             type="submit"
//             className="bg-green-700 text-white py-4 px-8 rounded-lg text-2xl w-96 h-24 cursor-pointer mt-20 font-merriweather whitespace-nowrap"
//           >
//             DONATE NOW
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Donation;
