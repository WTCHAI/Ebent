import React from 'react';

export default function ExamEvent() {
  return (
    <section className="bg-white py-[20vh]" id="explore">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event cards would be dynamically generated here */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Event Title</h3>
            <p className="text-gray-600 mt-2">Event description goes here.</p>
            <a href="#" className="text-primaryBlue mt-4 inline-block">Learn More</a>
          </div>
          {/* Repeat above block for more events */}
        </div>
      </div>
    </section>
  );
}
