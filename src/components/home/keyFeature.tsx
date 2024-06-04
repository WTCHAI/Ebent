import React from 'react';
import { FaCalendarAlt, FaWallet, FaUserShield, FaSearch } from 'react-icons/fa';

export default function KeyFeatures() {
  return (
    <section className="bg-slate-200 py-[20vh]">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Platform?</h2>
        <div className="flex flex-wrap justify-center gap-8 mobile:mx-[5vw]">
          <div className="mobile:py-[5vh] mobile:px-[4vw] mobile:w-full  md:max-w-sm md: border border-gray-100 rounded-lg shadow-md hover:shadow-lg bg-gray-50 transition-all duration-300 hover:scale-[1.02]">
            <FaCalendarAlt className="text-4xl text-primaryBlue mx-auto"/>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Easy Event Management</h3>
            <p className="text-gray-600 mt-2">Create and manage your events with ease using our intuitive tools.</p>
          </div>
          <div className="mobile:py-[5vh] mobile:px-[4vw] mobile:w-full md:max-w-sm border border-gray-100 rounded-lg shadow-md hover:shadow-lg bg-gray-50 transition-all duration-300 hover:scale-[1.02]">
            <FaWallet className="text-4xl text-primaryBlue mx-auto"/>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Secure Payments</h3>
            <p className="text-gray-600 mt-2">Enjoy secure transactions and transparent payment processes.</p>
          </div>
          <div className="mobile:py-[5vh] mobile:px-[4vw] mobile:w-full md:max-w-sm  border border-gray-100 rounded-lg shadow-md hover:shadow-lg bg-gray-50 transition-all duration-300 hover:scale-[1.02]">
            <FaUserShield className="text-4xl text-primaryBlue mx-auto"/>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">User Privacy</h3>
            <p className="text-gray-600 mt-2">Your data is protected with our state-of-the-art security measures.</p>
          </div>
          <div className="mobile:py-[5vh] mobile:px-[4vw] mobile:w-full md:max-w-sm  border border-gray-100 rounded-lg shadow-md hover:shadow-lg bg-gray-50 transition-all duration-300 hover:scale-[1.02]">
            <FaSearch className="text-4xl text-primaryBlue mx-auto"/>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Discover Events</h3>
            <p className="text-gray-600 mt-2">Easily find and join events that match your interests.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
