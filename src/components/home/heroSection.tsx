import React from 'react';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white text-center py-[22vh]">
      <div className="flex flex-col items-center justify-center px-4 ">
        <h1 className="text-5xl font-bold text-gray-900">Blockchain-Powered Event Marketplace</h1>
        <p className="mt-4 text-xl text-gray-600">Join the future of events with our secure and transparent platform.</p>
        <div className=" flex flex-row mt-8 gap-x-[3vw] items-center justify-center">
          <Link href="/benefit" className=" bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300">Join as Organizer</Link>
          <Link href="/explore" className=" bg-primaryBlue text-white py-2 px-6 rounded-lg hover:bg-darkBlue ">Explore Events</Link>
        </div>
      </div>
    </section>
  );
}
