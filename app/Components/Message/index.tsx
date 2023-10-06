"use client"
import React, { useState } from 'react';
import { FaWindows, FaHandshake, FaEnvelope, FaCog, FaPhone, FaEye, FaEyeSlash, FaSignOutAlt } from 'react-icons/fa';

const Message = () => {
  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setTogglePasswordVisibility(!togglePasswordVisibility);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

  
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name) {
      valid = false;
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      valid = false;
      newErrors.email = 'Email is required';
    } 
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      valid = false;
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message) {
      valid = false;
      newErrors.message = 'Message is required';
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div className='flex ml-4 mt-36 mb-12'>

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
        {togglePasswordVisibility ? <FaEyeSlash /> : <FaEye />}
       </span>



      </div>
    
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-1/1 mb-24 ml-24 rounded-lg">
          <div className="md:order-2">
            <h1 className="text-5xl ml-96 font-bold text-green-700 mt-24 font-merriweather">Contact Us</h1>
            <div className="flex flex-col md:flex-row">
             
              <div className='flex-column mt-64'>
                <div className="md:flex-1 md:mr-6 mt-4 ml-24">
                  <p className='text-3xl font-merriweather'>Name</p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-none border-b-6 border-gray-300 mt-4 w-full focus:outline-none focus:border-green-700"
                    placeholder="Enter Name"
                  />
                  <span className="text-red-500">{errors.name}</span>
                  <hr className="my-4 border-t-3 border-black h-6 w-64" />
                </div>

                <div className="md:flex-1 md:mr-6 mt-4 ml-24">
                  <p className='text-3xl font-merriweather'>Email</p>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-none border-b-6 border-gray-300 mt-4 w-full focus:outline-none focus:border-green-700"
                    placeholder="Enter Email"
                  />
                  <span className="text-red-500">{errors.email}</span>
                  <hr className="my-4 border-t-3 border-black h-6 w-64" />
                </div>

                <div className="md:flex-1 md:mr-6 mt-4 ml-24">
                  <p className='text-3xl font-merriweather'>MESSAGE</p>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border-none border-b-6 border-gray-300 mt-4 w-full focus:outline-none focus:border-green-700"
                    placeholder="Type your message here"
                  />
                  <span className="text-red-500">{errors.message}</span>
                  <hr className="my-4 border-t-3 border-black h-6 w-64" />
                </div>
              </div>

             
              <div className="md:flex-1 mt-8 md:mt-0 ml-64">
                <button
                  type="submit"
                  className="bg-green-700 border-6 border-gray-500 text-white py-64 px-12 rounded-lg w-full h-32 mt-64 ml-36 cursor-pointer font-merriweather hover:border-green-700 flex flex-col justify-center items-center"
                >
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-24 font-merriweather">INFO</h1>
                    <p className="mb-24">
                      <a href="mailto:amaliathletes@gmail.com">
                        <FaEnvelope className="inline-block mr-5 text-4xl" />
                        amaliathletes@gmail.com
                      </a>
                    </p>
                    <p>
                      <a href="tel:+254789056432">
                        <FaPhone className="inline-block mr-2 text-4xl mb-2" />
                        +254 789 056 432
                      </a>
                    </p>
                  </div>
                </button>
              </div>
            </div>

          
            <div>
              <button className="bg-green-700 text-white py-3 px-4 w-80 h-16 ml-32 rounded-lg mt-36 font-merriweather hover:bg-black cursor-pointer">
                SEND
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Message;


// "use client"
// import React, { useState } from 'react';
// import { FaEnvelope, FaPhone} from 'react-icons/fa';

// const Contact = () => {
//   const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);

//   const handleTogglePasswordVisibility = () => {
//     setTogglePasswordVisibility(!togglePasswordVisibility);
//   };
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     message: '',
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

  
//     let valid = true;
//     const newErrors = { ...errors };

//     if (!formData.name) {
//       valid = false;
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email) {
//       valid = false;
//       newErrors.email = 'Email is required';
//     } 
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       valid = false;
//       newErrors.email = 'Invalid email format';
//     }

//     if (!formData.message) {
//       valid = false;
//       newErrors.message = 'Message is required';
//     }

//     if (!valid) {
//       setErrors(newErrors);
//       return;
//     }

//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className='flex ml-24 mt-6'>
    
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col md:flex-row justify-between w-full md:w-1/1 mb-36 ml-24 rounded-lg">
//           <div className="md:order-2">
//             <h1 className="text-5xl ml-96 font-bold text-green-700 mt-24 font-merriweather">Contact Us</h1>
//             <div className="flex flex-col md:flex-row">
             
//               <div className='flex-column mt-64'>

//                 <div className="md:flex-1 md:mr-6 mt-4 ml-24">
//                   <p className='text-3xl font-merriweather'>Name</p>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="border-none border-b-6 border-gray-300 mt-4 w-full focus:outline-none focus:border-green-700"
//                     placeholder="Enter Name"
//                   />
//                   <span className="text-red-500">{errors.name}</span>
//                   <hr className="my-4 border-t-3 border-black h-6 w-96" />
//                 </div>

//                 <div className="md:flex-1 md:mr-6 mt-12 ml-24">
//                   <p className='text-3xl font-merriweather'>Email</p>
//                   <input
//                     type="text"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="border-none border-b-6 border-gray-300 mt-4 w-full focus:outline-none focus:border-green-700"
//                     placeholder="Enter Email"
//                   />
//                   <span className="text-red-500">{errors.email}</span>
//                   <hr className="my-4 border-t-3 border-black h-6 w-96" />
//                 </div>

//                 <div className="md:flex-1 md:mr-6 mt-12 ml-24">
//                   <p className='text-3xl font-merriweather'>Message</p>
//                   <input
//                     type="text"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="border-none border-b-6 border-gray-300 mt-4 w-full focus:outline-none focus:border-green-700"
//                     placeholder="Type your message here"
//                   />
//                   <span className="text-red-500">{errors.message}</span>
//                   <hr className="my-4 border-t-3 border-black h-6 w-96" />
//                 </div>
//               </div>


//               <div className="md:flex-1 mt-8 md:mt-0 ml-60">
//                 <button
//                 type="submit"
//                 className="bg-green-700 border-6 border-gray-500 text-white py-64 px-12 rounded-lg w-full h-24 mt-64 ml-36 cursor-pointer font-merriweather hover:border-green-700 flex flex-col justify-center items-center"
//                 >
//                 <div className="text-center">
//                     <h1 className="text-4xl font-bold mb-16 font-merriweather">INFO</h1>
//                   <div className="mb-12">
//                     <a href="mailto:amaliathletes@gmail.com" className="flex items-center">
//                       <FaEnvelope className="inline-block mr-5 text-4xl" />
//                       <span className='text-2xl font-merriweather'>amaliathletes@gmail.com</span>
//                     </a>
//                   </div>

//                 <div>
//                   <a href="tel:+254789056432" className="flex items-center">
//                     <FaPhone className="inline-block mr-5 text-4xl mb-2" />
//                       <span className='text-2xl font-merriweather'>+254 759 942 644</span>
//                   </a>
//                 </div>

//                 </div>
//                 </button>
//               </div>

//             </div>

//             <div className='mt-12'>
//               <button className="bg-green-700 text-white text-3xl py-4 px-4 w-96 h-24 ml-24 rounded-lg font-merriweather cursor-pointer text-center">
//               SEND
//               </button>
//             </div>

//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;

// import React, { useState } from 'react';
// import { FaEnvelope, FaPhone } from 'react-icons/fa';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     message: '',
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

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     let valid = true;
//     const newErrors = { ...errors };

//     if (!formData.name) {
//       valid = false;
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email) {
//       valid = false;
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       valid = false;
//       newErrors.email = 'Invalid email format';
//     }

//     if (!formData.message) {
//       valid = false;
//       newErrors.message = 'Message is required';
//     }

//     if (!valid) {
//       setErrors(newErrors);
//       return;
//     }

//     // Create a FormData object to send form data
//     const form = new FormData();
//     form.append('name', formData.name);
//     form.append('email', formData.email);
//     form.append('message', formData.message);

//     try {
//       const response = await fetch('https://formspree.io/f/mgejpwkd', {
//         method: 'POST',
//         body: form,
//         headers: {
//           Accept: 'application/json',
//         },
//       });

//       if (response.ok) {
//         console.log('Form submitted successfully');
//         // Optionally, reset the form fields here
//         setFormData({
//           name: '',
//           email: '',
//           message: '',
//         });
//       } else {
//         console.error('Form submission failed');
//       }
//     } catch (error) {
//       console.error('Error submitting the form', error);
//     }
//   };

//   return (
//     <div className='flex ml-24 mt-6'>
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col md:flex-row justify-between w-full md:w-1/1 mb-36 ml-24 rounded-lg">
//           <div className="md:order-2">
//             <h1 className="text-5xl ml-96 font-bold text-green-700 mt-24 font-merriweather">Contact Us</h1>
//             <div className="flex flex-col md:flex-row">
//               <div className='flex-column mt-64'>
//                 <div className="md:flex-1 md:mr-6 mt-4 ml-24">
//                   <p className='text-3xl font-merriweather'>Name</p>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="border-none border-b-6 border-gray-300 mt-4 w-full focus:outline-none focus:border-green-700"
//                     placeholder="Enter Name"
//                   />
//                   <span className="text-red-500">{errors.name}</span>
//                   <hr className="my-4 border-t-3 border-black h-6 w-96" />
//                 </div>

//                 <div className="md:flex-1 md:mr-6 mt-12 ml-24">
//                   <p className='text-3xl font-merriweather'>Email</p>
//                   <input
//                     type="text"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="border-none border-b-6 border-gray-300 mt-4 w-full focus:outline-none focus:border-green-700"
//                     placeholder="Enter Email"
//                   />
//                   <span className="text-red-500">{errors.email}</span>
//                   <hr className="my-4 border-t-3 border-black h-6 w-96" />
//                 </div>

//                 <div className="md:flex-1 md:mr-6 mt-12 ml-24">
//                   <p className='text-3xl font-merriweather'>Message</p>
//                   <input
//                     type="text"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="border-none border-b-6 border-gray-300 mt-4 w-full focus:outline-none focus:border-green-700"
//                     placeholder="Type your message here"
//                   />
//                   <span className="text-red-500">{errors.message}</span>
//                   <hr className="my-4 border-t-3 border-black h-6 w-96" />
//                 </div>
//               </div>

//               <div className="md:flex-1 mt-8 md:mt-0 ml-60">
//                 <button
//                   type="submit"
//                   className="bg-green-700 border-6 border-gray-500 text-white py-64 px-12 rounded-lg w-full h-24 mt-64 ml-36 cursor-pointer font-merriweather hover:border-green-700 flex flex-col justify-center items-center"
//                 >
//                   <div className="text-center">
//                     <h1 className="text-4xl font-bold mb-16 font-merriweather">INFO</h1>
//                     <div className="mb-12">
//                       <a href="mailto:amaliathletes@gmail.com" className="flex items-center">
//                         <FaEnvelope className="inline-block mr-5 text-4xl" />
//                         <span className='text-2xl font-merriweather'>amaliathletes@gmail.com</span>
//                       </a>
//                     </div>
//                     <div>
//                       <a href="tel:+254789056432" className="flex items-center">
//                         <FaPhone className="inline-block mr-5 text-4xl mb-2" />
//                         <span className='text-2xl font-merriweather'>+254 759 942 644</span>
//                       </a>
//                     </div>
//                   </div>
//                 </button>
//               </div>
//             </div>

//             <div className='mt-12'>
//               <button className="bg-green-700 text-white text-3xl py-4 px-4 w-96 h-24 ml-24 rounded-lg font-merriweather cursor-pointer text-center">
//                 SEND
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;