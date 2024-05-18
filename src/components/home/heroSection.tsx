import React from 'react';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white text-center py-[15vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900">Blockchain-Powered Event Management</h1>
        <p className="mt-4 text-xl text-gray-600">Join the future of events with our secure and transparent platform.</p>
        <div className="mt-8">
          <Link href="/benefit" className="bg-primaryBlue text-white py-2 px-6 rounded-lg hover:bg-darkBlue">Join as Organizer</Link>
          <Link href="/explore" className="ml-4 bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300">Explore Events</Link>
        </div>
      </div>
    </section>
  );
}
