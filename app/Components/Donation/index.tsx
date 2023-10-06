"use client"
import React, { useState } from 'react';


const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    amount: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    amount: '',
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

    if (formData.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone Number is required';
      hasErrors = true;
    } 
    else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must contain only numbers';
      hasErrors = true;
    }

    if (formData.amount.trim() === '') {
      newErrors.amount = 'Amount is required';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
    } 
    else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="ml-36 mt-36">

          <div className="ml-96">
            <p className="text-4xl font-bold text-green-700">Your Sponsorship will make a difference</p>
          </div>
    
      <div className="flex flex-col md:flex-row justify-between w-3/4 md:w-1/1 p-6 ml-16 rounded-lg">

        <div className="md:ml-36">


          <div> 
            <h1 className="text-3xl mt-36 font-bold">ENTER AMOUNT</h1>
            <input
              type="number"
              className={`border border-6 border-black text-black py-3 px-4 rounded-lg w-96 h-24 mt-24 font-merriweather ${
                errors.amount ? 'border-red-500' : ''
              }`}
              placeholder="Enter Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
          </div>

          <div className='mt-96 text-4xl font-bold text-green-700'>
            <a href="/contact">
              <h1>Become A Sponsor</h1>
            </a>
          </div>

        </div>

        <div className="ml-96 mt-36">

          <h2 className="text-3xl mb-6 font-bold">YOUR DETAILS</h2>

          <form className="px-6 mt-12" onSubmit={handleSubmit}>

            <div>

            <div className="mb-6">
              <label htmlFor="name" className="text-xl mb-2 block font-bold font-merriweather">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-5 border border-gray-900 rounded-lg mt-2 placeholder-black font-merriweather ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="Enter Full Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-6 mt-12">
              <label htmlFor="email" className="text-xl mb-2 font-bold block font-merriweather">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-5 border border-gray-900 rounded-lg mt-2 placeholder-black font-merriweather ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Enter Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            </div>

            <div className="mb-6 mt-12">
              <label htmlFor="phoneNumber" className="text-xl mb-2 block font-bold font-merriweather">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full px-4 py-5 border border-gray-900 rounded-lg mt-2 placeholder-black font-merriweather ${
                  errors.phoneNumber ? 'border-red-500' : ''
                }`}
                placeholder="Enter Phone Number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white py-6 px-8 rounded-lg text-2xl w-96 cursor-pointer mt-12 font-merriweather whitespace-nowrap"
              >
              DONATE NOW
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Donation;