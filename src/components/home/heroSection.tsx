import React from 'react';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white text-center py-[25vh]">
      <div className="flex flex-col items-center justify-center px-4 ">
        <h1 className="mobile:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">Blockchain-Powered Event Marketplace</h1>
        <p className="mt-4 mobile:text-base md:text-lg lg:text-xl text-gray-600">Join the future of events with our secure and transparent platform.</p>
        <div className=" flex mobile:flex-col md:flex-row mt-8 gap-x-[3vw] gap-y-[1vh] items-center justify-center md:w-full">
          <Link href="/benefit" className="mobile:w-full mobile:text-sm md:text-base md:w-fit lg:text-md bg-gray-200 text-gray-800 py-2 px-[3vw] rounded-lg hover:bg-gray-300 hover:scale-[1.02] transition-all duration-300">Join as Organizer</Link>
          <Link href="/explore" className="mobile:w-full mobile:text-sm md:text-base md:w-fit lg:text-md bg-primaryBlue text-white py-2 px-[3vw] rounded-lg hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300">Explore Events</Link>
        </div>
      </div>
    </section>
  );
}
